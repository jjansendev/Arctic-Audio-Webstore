"use client";

import { motion } from "framer-motion";

export default function WaveformBackdrop() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-arctic-900 via-arctic-800 to-arctic-700" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(111,232,255,0.16),transparent_65%)]"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(111,232,255,0.12) 0 2px, transparent 2px 14px)",
          maskImage: "linear-gradient(180deg, transparent, black 25%, black 75%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 25%, black 75%, transparent)"
        }}
      />
    </motion.div>
  );
}
