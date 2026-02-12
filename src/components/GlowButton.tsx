"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type GlowButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export default function GlowButton({ href, label, variant = "primary" }: GlowButtonProps) {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.02 }}>
      <Link href={href} className={baseClass}>
        {label}
      </Link>
    </motion.div>
  );
}
