"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";
import { useRef } from "react";

type Props = ComponentProps<typeof motion.a> & {
  children: ReactNode;
  strength?: number;
};

export function MagneticButton({ children, strength = 18, className = "", ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.4 });
  const x = useTransform(sx, (v) => v);
  const y = useTransform(sy, (v) => v);

  return (
    <motion.a
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        mx.set((dx / r.width) * strength);
        my.set((dy / r.height) * strength);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ x, y }}
      className={className}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
