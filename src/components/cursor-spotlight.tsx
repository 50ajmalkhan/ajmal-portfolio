"use client";

import { useEffect, useRef } from "react";

export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let tx = 0,
      ty = 0,
      x = 0,
      y = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      x += (tx - x) * 0.15;
      y += (ty - y) * 0.15;
      el.style.transform = `translate3d(${x - 240}px, ${y - 240}px, 0)`;
      if (Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[480px] w-[480px] rounded-full opacity-60 mix-blend-screen blur-3xl"
      style={{
        background:
          "radial-gradient(circle, rgba(217,119,87,0.32) 0%, rgba(139,92,246,0.18) 40%, transparent 70%)",
      }}
    />
  );
}
