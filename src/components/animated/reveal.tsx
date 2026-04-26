"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 0.9, 0.32, 1] },
  },
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  once = true,
  amount = 0.25,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
