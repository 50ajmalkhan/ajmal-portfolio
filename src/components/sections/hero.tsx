"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LetterStagger } from "@/components/animated/letter-stagger";
import { MagneticButton } from "@/components/animated/magnetic-button";
import { personal } from "@/content/personal";

function RotatingRole() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % personal.rotatingRoles.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex items-baseline">
      <span className="bg-gradient-to-r from-accent via-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
        <motion.span
          key={idx}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 0.9, 0.32, 1] }}
          className="inline-block"
        >
          {personal.rotatingRoles[idx]}
        </motion.span>
      </span>
      <span className="caret ml-1 inline-block h-[0.9em] w-[2px] translate-y-1 bg-accent dark:bg-accent-dark" />
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} id="top" className="relative isolate overflow-hidden pt-24 md:pt-32">
      <div className="absolute inset-0 -z-10 dot-grid grid-mask" aria-hidden />
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10" aria-hidden>
        <div className="aurora" />
      </motion.div>

      <div className="mx-auto flex min-h-[88vh] max-w-content flex-col justify-center px-5 pb-24 md:px-8">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 self-start rounded-full border border-line/60 bg-card/40 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.18em] text-muted backdrop-blur dark:border-line-dark/60 dark:bg-card-dark/40 dark:text-muted-dark"
        >
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
          </span>
          Available for senior roles · Remote / Relocation
        </motion.span>

        <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-balance md:text-7xl lg:text-8xl">
          <LetterStagger text="Muhammad" as="span" className="block" />
          <LetterStagger
            text="Ajmal Khan."
            as="span"
            className="block bg-gradient-to-br from-ink via-ink/80 to-accent bg-clip-text text-transparent dark:from-ink-dark dark:via-ink-dark/80 dark:to-accent-dark"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 font-display text-2xl font-medium tracking-tight md:text-3xl"
        >
          I build as a <RotatingRole />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-5 max-w-2xl text-pretty text-base text-muted dark:text-muted-dark md:text-lg"
        >
          {personal.oneLiner} Specialized in React + TypeScript on the frontend, Python (FastAPI) on
          the backend, and production-grade AI systems — LangChain, RAG, and multi-agent
          orchestration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <MagneticButton
            href="#contact"
            className="shine relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg shadow-[0_10px_40px_-10px_rgba(217,119,87,0.6)] transition-shadow hover:shadow-[0_18px_50px_-10px_rgba(217,119,87,0.8)] dark:bg-ink-dark dark:text-bg-dark"
          >
            <Mail size={15} />
            Get in touch
          </MagneticButton>
          <MagneticButton
            href={personal.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-card/50 px-6 py-3 text-sm font-medium text-ink backdrop-blur transition-colors hover:border-accent hover:text-accent dark:border-line-dark dark:bg-card-dark/50 dark:text-ink-dark dark:hover:border-accent-dark dark:hover:text-accent-dark"
          >
            <Download size={15} />
            Download CV
          </MagneticButton>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm text-muted transition-colors hover:text-accent dark:text-muted-dark dark:hover:text-accent-dark"
          >
            <Sparkles size={15} />
            View work
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-muted dark:text-muted-dark"
        >
          <span>Currently shipping at</span>
          <a href="https://workhub.ai/" target="_blank" rel="noreferrer" className="hover:text-accent dark:hover:text-accent-dark">
            WorkHub
          </a>
          <span className="opacity-50">·</span>
          <a href="https://www.protaige.com/" target="_blank" rel="noreferrer" className="hover:text-accent dark:hover:text-accent-dark">
            Protaigé
          </a>
        </motion.div>

        <motion.a
          href="#about"
          aria-label="Scroll to about"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="mt-12 inline-flex h-9 w-9 items-center justify-center self-center rounded-full border border-line/60 text-muted dark:border-line-dark/60 dark:text-muted-dark"
        >
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
