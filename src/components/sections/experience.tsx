"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/animated/reveal";
import { SectionHeading } from "@/components/animated/section-heading";
import { education, experience } from "@/content/experience";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <SectionHeading eyebrow="Career" title="Six years of shipping, growing, and leading." />

        <div ref={ref} className="relative mt-16 pl-8 md:pl-12">
          <span
            aria-hidden
            className="absolute left-3 top-2 h-full w-px bg-line/70 dark:bg-line-dark/70 md:left-4"
          />
          <motion.span
            aria-hidden
            style={{ height: lineHeight }}
            className="absolute left-3 top-2 w-px bg-gradient-to-b from-accent via-fuchsia-500 to-sky-400 md:left-4"
          />

          <ul className="space-y-12">
            {experience.map((e, i) => (
              <li key={e.company} className="relative">
                <motion.span
                  aria-hidden
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="absolute -left-[27px] top-2 h-3 w-3 rounded-full border-2 border-bg bg-accent shadow-[0_0_0_4px_rgba(217,119,87,0.18)] dark:border-bg-dark dark:bg-accent-dark md:-left-[33px]"
                />
                <Reveal delay={i * 0.05}>
                  <div className="rounded-2xl border border-line/60 bg-card/80 p-6 backdrop-blur dark:border-line-dark/60 dark:bg-card-dark/40">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                        {e.company}
                      </h3>
                      <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
                        {e.span}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted dark:text-muted-dark">{e.location}</p>
                    {e.highlight && (
                      <p className="mt-3 inline-flex rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent dark:border-accent-dark/40 dark:bg-accent-dark/10 dark:text-accent-dark">
                        {e.highlight}
                      </p>
                    )}
                    <ul className="mt-4 space-y-2 text-sm">
                      {e.roles.map((r) => (
                        <li key={r.title} className="flex flex-wrap items-baseline justify-between gap-2 text-muted dark:text-muted-dark">
                          <span className="font-medium text-ink dark:text-ink-dark">{r.title}</span>
                          <span className="font-mono text-xs">{r.period}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <div className="mt-14 rounded-2xl border border-line/60 bg-card/80 p-6 backdrop-blur dark:border-line-dark/60 dark:bg-card-dark/40">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent dark:text-accent-dark">
              Education
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-tight md:text-2xl">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-muted dark:text-muted-dark">{education.institution}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
              {education.location} · {education.period}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
