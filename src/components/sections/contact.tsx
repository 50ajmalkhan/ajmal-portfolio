"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animated/reveal";
import { SectionHeading } from "@/components/animated/section-heading";
import { MagneticButton } from "@/components/animated/magnetic-button";
import { personal } from "@/content/personal";

const items = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/muhammad-ajmal-khan-210053170", href: personal.linkedin },
  { icon: Github, label: "GitHub", value: "github.com/50ajmalkhan", href: personal.github },
];

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl border border-line/60 bg-card/40 px-6 py-14 backdrop-blur dark:border-line-dark/60 dark:bg-card-dark/40 md:px-12 md:py-20">
          <div className="absolute inset-0 -z-10 opacity-50" aria-hidden>
            <div className="aurora" />
          </div>

          <SectionHeading
            eyebrow="Let's build"
            title="Have a role, a product, or an idea worth shipping?"
            subtitle="I'm open to senior full-stack and AI engineering roles — remote or relocation. Quickest reply via email."
            align="center"
          />

          <Reveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton
                href={`mailto:${personal.email}`}
                className="shine relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-bg shadow-[0_10px_40px_-10px_rgba(217,119,87,0.6)] transition-shadow hover:shadow-[0_18px_50px_-10px_rgba(217,119,87,0.8)] dark:bg-ink-dark dark:text-bg-dark"
              >
                <Mail size={16} />
                {personal.email}
              </MagneticButton>
              <MagneticButton
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-bg/60 px-7 py-3.5 text-sm font-medium text-ink backdrop-blur transition-colors hover:border-accent hover:text-accent dark:border-line-dark dark:bg-bg-dark/60 dark:text-ink-dark dark:hover:border-accent-dark dark:hover:text-accent-dark"
              >
                <Linkedin size={16} />
                Connect on LinkedIn
              </MagneticButton>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {items.map((it, i) => (
              <Reveal key={it.label} delay={i * 0.05}>
                <motion.a
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel={it.href.startsWith("http") ? "noreferrer" : undefined}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="group flex items-center gap-4 rounded-2xl border border-line/60 bg-bg/50 p-4 backdrop-blur transition-colors hover:border-accent/60 dark:border-line-dark/60 dark:bg-bg-dark/50 dark:hover:border-accent-dark/60"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                    <it.icon size={16} />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
                      {it.label}
                    </span>
                    <span className="mt-0.5 block text-sm text-ink dark:text-ink-dark">
                      {it.value}
                    </span>
                  </span>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
