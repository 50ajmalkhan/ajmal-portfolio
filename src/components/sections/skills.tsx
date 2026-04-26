"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animated/reveal";
import { SectionHeading } from "@/components/animated/section-heading";
import { skillGroups } from "@/content/skills";

const ribbon = [
  "React",
  "TypeScript",
  "Python",
  "FastAPI",
  "LangChain",
  "RAG",
  "OpenAI",
  "Anthropic",
  "Pinecone",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Stripe",
  "Docker",
  "Socket.io",
  "Tailwind",
];

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <SectionHeading
          eyebrow="Tech stack"
          title="Tools I reach for, organized by where they fit in the stack."
        />
      </div>

      <div className="mt-12 overflow-hidden border-y border-line/60 py-5 dark:border-line-dark/60">
        <div className="marquee-track flex items-center gap-6 whitespace-nowrap font-display text-3xl font-medium tracking-tight text-ink/80 md:text-4xl dark:text-muted-dark/80">
          {[...ribbon, ...ribbon].map((t, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="transition-colors hover:text-accent dark:hover:text-accent-dark">
                {t}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent/60 dark:bg-accent-dark/60" />
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-content px-5 md:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.06}>
              <div className="group h-full rounded-2xl border border-line/60 bg-card/80 p-6 backdrop-blur transition-colors hover:border-accent/60 dark:border-line-dark/60 dark:bg-card-dark/40 dark:hover:border-accent-dark/60">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent dark:text-accent-dark">
                  {g.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s, si) => (
                    <motion.li
                      key={s}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.32, delay: si * 0.025 }}
                      className="rounded-full border border-line/70 bg-bg/80 px-3 py-1 text-xs text-ink transition-colors hover:border-accent hover:text-accent dark:border-line-dark/70 dark:bg-bg-dark/60 dark:text-ink-dark dark:hover:border-accent-dark dark:hover:text-accent-dark"
                    >
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
