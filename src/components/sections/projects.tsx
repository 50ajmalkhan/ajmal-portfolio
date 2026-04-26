"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/animated/reveal";
import { SectionHeading } from "@/components/animated/section-heading";
import { projects, type Project } from "@/content/projects";

function ProjectCard({ p, onOpen, index }: { p: Project; onOpen: () => void; index: number }) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 220, damping: 22 });
  const sy = useSpring(my, { stiffness: 220, damping: 22 });
  const rotateY = useTransform(sx, [0, 1], [6, -6]);
  const rotateX = useTransform(sy, [0, 1], [-6, 6]);
  const spotX = useTransform(sx, (v) => `${v * 100}%`);
  const spotY = useTransform(sy, (v) => `${v * 100}%`);

  return (
    <Reveal delay={index * 0.05}>
      <motion.button
        ref={ref}
        onClick={onOpen}
        onMouseMove={(e) => {
          const el = ref.current;
          if (!el) return;
          const r = el.getBoundingClientRect();
          mx.set((e.clientX - r.left) / r.width);
          my.set((e.clientY - r.top) / r.height);
        }}
        onMouseLeave={() => {
          mx.set(0.5);
          my.set(0.5);
        }}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="group relative w-full text-left will-change-transform"
        aria-label={`Open project details — ${p.title}`}
      >
        <div className="relative h-full overflow-hidden rounded-2xl border border-line/60 bg-card/85 p-7 backdrop-blur transition-colors duration-300 group-hover:border-accent/60 dark:border-line-dark/60 dark:bg-card-dark/50 dark:group-hover:border-accent-dark/60">
          <motion.div
            aria-hidden
            style={{
              background: `radial-gradient(380px circle at ${spotX.get()} ${spotY.get()}, rgba(217,119,87,0.18), transparent 60%)`,
            }}
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <motion.div
            aria-hidden
            style={{
              left: spotX,
              top: spotY,
              background:
                "radial-gradient(closest-side, rgba(217,119,87,0.35), rgba(139,92,246,0.18) 50%, transparent 80%)",
            }}
            className="pointer-events-none absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
          />

          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent dark:text-accent-dark">
                {p.period}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-[26px]">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-muted dark:text-muted-dark">{p.type}</p>
            </div>
            <ArrowUpRight
              size={20}
              className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent dark:text-muted-dark dark:group-hover:text-accent-dark"
            />
          </div>

          <p className="relative mt-5 line-clamp-3 text-pretty text-[15px] leading-relaxed text-muted dark:text-muted-dark">
            {p.description}
          </p>

          <div className="relative mt-6 flex flex-wrap gap-1.5">
            {p.tech.slice(0, 6).map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-bg/80 px-2.5 py-0.5 text-[11px] text-ink dark:border-line-dark/60 dark:bg-bg-dark/40 dark:text-ink-dark/85"
              >
                {t}
              </span>
            ))}
            {p.tech.length > 6 && (
              <span className="rounded-full border border-line/60 bg-bg/70 px-2.5 py-0.5 text-[11px] text-muted dark:border-line-dark/60 dark:bg-bg-dark/40 dark:text-muted-dark">
                +{p.tech.length - 6}
              </span>
            )}
          </div>
        </div>
      </motion.button>
    </Reveal>
  );
}

function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/50 backdrop-blur-md md:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`proj-${p.slug}`}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 60, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 60, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 0.9, 0.32, 1] }}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-line/60 bg-bg p-8 shadow-2xl dark:border-line-dark/60 dark:bg-bg-dark md:rounded-3xl"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line/60 text-muted transition-colors hover:border-accent hover:text-accent dark:border-line-dark/60 dark:text-muted-dark dark:hover:border-accent-dark dark:hover:text-accent-dark"
        >
          <X size={16} />
        </button>

        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent dark:text-accent-dark">
          {p.period}
        </p>
        <h3 id={`proj-${p.slug}`} className="mt-2 font-display text-3xl font-semibold tracking-tight">
          {p.title}
        </h3>
        <p className="mt-1 text-sm text-muted dark:text-muted-dark">
          {p.role} · {p.type}
        </p>
        {p.liveUrl && (
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent hover:underline dark:text-accent-dark"
          >
            <ExternalLink size={14} /> {p.liveUrl.replace(/^https?:\/\//, "")}
          </a>
        )}
        <p className="mt-5 text-pretty text-[15px] leading-relaxed text-muted dark:text-muted-dark">
          {p.description}
        </p>

        <h4 className="mt-7 font-mono text-xs uppercase tracking-[0.18em] text-ink dark:text-ink-dark">
          What I built
        </h4>
        <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted dark:text-muted-dark">
          {p.contributions.map((c, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent dark:bg-accent-dark" />
              <span>{c}</span>
            </li>
          ))}
        </ul>

        <h4 className="mt-7 font-mono text-xs uppercase tracking-[0.18em] text-ink dark:text-ink-dark">
          Tech
        </h4>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-card/70 px-3 py-1 text-xs text-ink dark:border-line-dark/60 dark:bg-card-dark/40 dark:text-ink-dark/90"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <SectionHeading
          eyebrow="Featured work"
          title="Production systems I designed, built, and shipped."
          subtitle="Click any card for the full case — what I built, the stack, and why it mattered."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal p={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
