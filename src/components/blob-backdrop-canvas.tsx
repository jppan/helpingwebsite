"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
uniform float uTime;
uniform float uScroll;
uniform float uSeed;
uniform float uAmplitude;

varying float vNoise;
varying vec3 vViewNormal;

vec4 permute(vec4 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 1.0 / 7.0;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

float fbm(vec3 value) {
  float total = 0.0;
  float amplitude = 0.5;

  for (int octave = 0; octave < 4; octave += 1) {
    total += snoise(value) * amplitude;
    value *= 2.03;
    amplitude *= 0.5;
  }

  return total;
}

void main() {
  vec3 transformed = position;
  float drift = uTime * 0.16;
  float scrollBias = 0.2 + (uScroll * 0.85);
  float field = fbm((position * (1.2 + scrollBias * 0.45)) + vec3(drift + uSeed, (drift * 0.7) - uSeed, drift * 0.45));
  float ripple = snoise((position * 2.4) + vec3(uSeed * 1.7, drift * 1.3, drift * 0.9));
  float pulse = sin((position.y + uSeed) * 2.2 + (uTime * (0.9 + uScroll * 0.7))) * 0.04;
  float displacement = (field * 0.24 + ripple * 0.08 + pulse) * uAmplitude;

  transformed += normal * displacement;

  vNoise = field;
  vViewNormal = normalize(normalMatrix * normalize(normal + displacement * 1.65));

  gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}
`;

const fragmentShader = `
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform float uAlpha;

varying float vNoise;
varying vec3 vViewNormal;

void main() {
  float fresnel = pow(1.0 - abs(dot(normalize(vViewNormal), vec3(0.0, 0.0, 1.0))), 1.85);
  float band = smoothstep(-0.45, 0.8, vNoise);
  float shimmer = 0.5 + 0.5 * sin(vNoise * 7.0 + fresnel * 5.0);

  vec3 color = mix(uColorA, uColorB, band);
  color = mix(color, uColorC, fresnel * 0.88);
  color += (uColorB * 0.12) * shimmer;

  float alpha = uAlpha * (0.16 + fresnel * 0.7 + band * 0.16);
  gl_FragColor = vec4(color, alpha);
}
`;

const wireFragmentShader = `
uniform vec3 uWireColor;
uniform float uWireAlpha;

void main() {
  gl_FragColor = vec4(uWireColor, uWireAlpha);
}
`;

type BlobState = {
  group: THREE.Group;
  solidMaterial: THREE.ShaderMaterial;
  wireMaterial: THREE.ShaderMaterial;
  seed: number;
  driftStrength: number;
  rotationStrength: number;
  orbitStrength: number;
  basePosition: THREE.Vector3;
  baseScale: number;
};

function paletteForTheme(theme: string | null) {
  if (theme === "light") {
    return {
      solid: [
        ["#eff8f9", "#70c7d1", "#167587"],
        ["#f7fbfb", "#8ae1d0", "#0f7a8f"],
        ["#fffbea", "#f2d65c", "#a8841f"],
        ["#fff5f7", "#ff9eb9", "#a14c73"],
      ],
      wire: ["#49a4b4", "#3f8fa0", "#d5b23d", "#d16e92"],
      solidAlpha: 0.22,
      wireAlpha: 0.11,
      canvasOpacity: "0.78",
    };
  }

  return {
    solid: [
      ["#0b1216", "#2db6c2", "#e4ffff"],
      ["#081418", "#42dbc4", "#98faff"],
      ["#161205", "#ffd95a", "#fff2b8"],
      ["#190b13", "#ff6b98", "#ffe2eb"],
    ],
    wire: ["#8dedff", "#7ef6dc", "#ffe27f", "#ff98be"],
    solidAlpha: 0.34,
    wireAlpha: 0.14,
    canvasOpacity: "0.96",
  };
}

export function BlobBackdropCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 24);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.domElement.className = "h-full w-full";
    container.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1, 4);

    const blobConfigs = [
      { seed: 0.17, driftStrength: 0.55, rotationStrength: 0.22, orbitStrength: 1 },
      { seed: 2.1, driftStrength: -0.45, rotationStrength: -0.18, orbitStrength: 0.9 },
      { seed: 4.4, driftStrength: 0.35, rotationStrength: 0.14, orbitStrength: 0.88 },
      { seed: 6.05, driftStrength: -0.32, rotationStrength: 0.12, orbitStrength: 0.94 },
    ] as const;

    const blobs: BlobState[] = blobConfigs.map((config) => {
      const solidMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        uniforms: {
          uTime: { value: 0 },
          uScroll: { value: 0 },
          uSeed: { value: config.seed },
          uAmplitude: { value: 1 },
          uColorA: { value: new THREE.Color("#0b1216") },
          uColorB: { value: new THREE.Color("#2db6c2") },
          uColorC: { value: new THREE.Color("#e4ffff") },
          uAlpha: { value: 0.3 },
        },
      });

      const wireMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader: wireFragmentShader,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        wireframe: true,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uTime: { value: 0 },
          uScroll: { value: 0 },
          uSeed: { value: config.seed },
          uAmplitude: { value: 1.02 },
          uWireColor: { value: new THREE.Color("#8dedff") },
          uWireAlpha: { value: 0.12 },
        },
      });

      const solidMesh = new THREE.Mesh(geometry, solidMaterial);
      const wireMesh = new THREE.Mesh(geometry, wireMaterial);
      wireMesh.scale.setScalar(1.045);

      const group = new THREE.Group();
      group.add(solidMesh);
      group.add(wireMesh);
      scene.add(group);

      return {
        group,
        solidMaterial,
        wireMaterial,
        seed: config.seed,
        driftStrength: config.driftStrength,
        rotationStrength: config.rotationStrength,
        orbitStrength: config.orbitStrength,
        basePosition: new THREE.Vector3(),
        baseScale: 1,
      };
    });

    const desktopLayout = [
      { x: -2.9, y: 1.6, z: -1.6, scale: 1.5 },
      { x: 3.1, y: -0.9, z: -2.2, scale: 1.2 },
      { x: 0.6, y: 3.0, z: -3.2, scale: 1.04 },
      { x: -1.7, y: -2.1, z: -2.85, scale: 1.12 },
    ];
    const mobileLayout = [
      { x: -1.6, y: 1.3, z: -1.9, scale: 1.15 },
      { x: 1.95, y: -0.55, z: -2.5, scale: 0.92 },
      { x: 0.2, y: 2.45, z: -3.2, scale: 0.84 },
      { x: -1.2, y: -2.0, z: -2.9, scale: 0.92 },
    ];

    const resize = () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      const aspect = width / height;
      const layout = width < 768 ? mobileLayout : desktopLayout;

      renderer.setSize(width, height, false);
      camera.aspect = aspect;
      camera.position.z = width < 768 ? 7.8 : 7.2;
      camera.updateProjectionMatrix();

      blobs.forEach((blob, index) => {
        const next = layout[index];
        blob.basePosition.set(next.x * aspect, next.y, next.z);
        blob.baseScale = next.scale;
        blob.group.position.copy(blob.basePosition);
        blob.group.scale.setScalar(next.scale);
      });
    };

    let targetScroll = 0;
    let scrollProgress = 0;

    const updateScroll = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      targetScroll = Math.min(window.scrollY / maxScroll, 1);
    };

    const applyTheme = () => {
      const palette = paletteForTheme(document.documentElement.dataset.theme ?? null);
      renderer.domElement.style.opacity = palette.canvasOpacity;

      blobs.forEach((blob, index) => {
        const [colorA, colorB, colorC] = palette.solid[index];
        blob.solidMaterial.uniforms.uColorA.value.set(colorA);
        blob.solidMaterial.uniforms.uColorB.value.set(colorB);
        blob.solidMaterial.uniforms.uColorC.value.set(colorC);
        blob.solidMaterial.uniforms.uAlpha.value = palette.solidAlpha;
        blob.wireMaterial.uniforms.uWireColor.value.set(palette.wire[index]);
        blob.wireMaterial.uniforms.uWireAlpha.value = palette.wireAlpha;
      });
    };

    resize();
    updateScroll();
    applyTheme();

    const themeObserver = new MutationObserver(() => {
      applyTheme();
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    let animationFrame = 0;
    const clock = new THREE.Clock();

    const renderFrame = () => {
      const elapsed = clock.getElapsedTime();
      scrollProgress += (targetScroll - scrollProgress) * 0.06;

      blobs.forEach((blob, index) => {
        const travel = (scrollProgress - 0.5) * (0.7 + index * 0.18);
        const orbit = blob.orbitStrength;
        blob.group.position.x = blob.basePosition.x + Math.cos(elapsed * (0.18 + orbit * 0.06) + blob.seed) * (0.12 + orbit * 0.08);
        blob.group.position.y =
          blob.basePosition.y +
          Math.sin(elapsed * (0.23 + orbit * 0.08) + blob.seed) * (0.15 + orbit * 0.07) +
          travel;
        blob.group.rotation.x = elapsed * (0.16 + index * 0.05) + scrollProgress * blob.rotationStrength;
        blob.group.rotation.y = elapsed * (0.22 + index * 0.07) + scrollProgress * (0.6 + index * 0.14);
        blob.group.rotation.z = elapsed * 0.08 * blob.driftStrength;

        blob.solidMaterial.uniforms.uTime.value = elapsed;
        blob.solidMaterial.uniforms.uScroll.value = scrollProgress;
        blob.solidMaterial.uniforms.uAmplitude.value = 0.92 + orbit * 0.24 + scrollProgress * (0.28 + orbit * 0.16);

        blob.wireMaterial.uniforms.uTime.value = elapsed;
        blob.wireMaterial.uniforms.uScroll.value = scrollProgress;
        blob.wireMaterial.uniforms.uAmplitude.value = 0.96 + orbit * 0.26 + scrollProgress * (0.32 + orbit * 0.18);
      });

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(renderFrame);
    };

    animationFrame = window.requestAnimationFrame(renderFrame);

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateScroll);
      themeObserver.disconnect();

      blobs.forEach((blob) => {
        blob.solidMaterial.dispose();
        blob.wireMaterial.dispose();
        scene.remove(blob.group);
      });

      geometry.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" aria-hidden="true" />;
}
