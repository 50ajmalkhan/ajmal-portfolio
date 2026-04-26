"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animated/reveal";
import { SectionHeading } from "@/components/animated/section-heading";
import { personal } from "@/content/personal";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <SectionHeading
          eyebrow="About"
          title="Senior engineer who ships full products end-to-end."
          subtitle="From architecture to deployment — frontend, backend, AI orchestration, payments, admin panels, and AWS infrastructure."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-5">
          <div className="space-y-5 text-pretty text-base leading-relaxed text-muted dark:text-muted-dark md:col-span-3 md:text-[17px]">
            {personal.bio.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
            <Reveal delay={personal.bio.length * 0.08}>
              <p className="font-mono text-sm uppercase tracking-[0.16em] text-ink dark:text-ink-dark">
                {personal.location}
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-3 md:col-span-2">
            {personal.highlights.map((h, i) => (
              <Reveal key={h.label} delay={0.1 + i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-line/60 bg-card/80 p-5 backdrop-blur transition-colors hover:border-accent/60 dark:border-line-dark/60 dark:bg-card-dark/40 dark:hover:border-accent-dark/60"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-accent-dark/15" />
                  <p className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                    {h.value}
                  </p>
                  <p className="mt-2 text-sm text-muted dark:text-muted-dark">{h.label}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
