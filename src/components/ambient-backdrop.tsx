"use client";

import { useReducedMotion } from "motion/react";

import { BlobBackdropCanvas } from "@/components/blob-backdrop-canvas";

export function AmbientBackdrop() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="ambient-grid" />
        <div className="ambient-orb ambient-orb-a" />
        <div className="ambient-orb ambient-orb-b" />
        <div className="ambient-vignette" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <BlobBackdropCanvas />
      <div className="ambient-grid" />
      <div className="ambient-vignette" />
    </div>
  );
}
