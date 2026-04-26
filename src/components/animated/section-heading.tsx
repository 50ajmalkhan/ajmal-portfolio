"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent dark:text-accent-dark"
      >
        <span className="h-px w-6 bg-accent dark:bg-accent-dark" />
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 0.9, 0.32, 1] }}
        className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-3 text-pretty text-base text-muted dark:text-muted-dark md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
