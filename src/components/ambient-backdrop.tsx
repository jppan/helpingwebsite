"use client";

import { motion, useReducedMotion } from "motion/react";

export function AmbientBackdrop() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="ambient-grid" />
        <div className="ambient-vignette" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="ambient-grid" />
      <motion.div
        className="ambient-orb ambient-orb-a"
        animate={{ x: [0, 48, -24, 0], y: [0, -32, 24, 0], scale: [1, 1.06, 0.98, 1] }}
        transition={{ duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-orb ambient-orb-b"
        animate={{ x: [0, -40, 18, 0], y: [0, 28, -22, 0], scale: [1, 0.96, 1.04, 1] }}
        transition={{ duration: 34, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-sweep"
        animate={{ rotate: [0, 8, 0], x: [0, 20, 0], y: [0, -16, 0] }}
        transition={{ duration: 26, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <div className="ambient-vignette" />
    </div>
  );
}
