"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { personal } from "@/content/personal";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 0.9, 0.32, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/60 bg-bg/70 glass dark:border-line-dark/60 dark:bg-bg-dark/60"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="group relative flex items-center gap-2 font-display text-base font-semibold tracking-tight"
        >
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-accent to-fuchsia-500 text-white shadow-[0_0_24px_rgba(217,119,87,0.45)]">
            <span className="text-[11px] font-bold">AK</span>
          </span>
          <span className="hidden sm:block">{personal.firstName}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
              >
                <span>{l.label}</span>
                <span className="pointer-events-none absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 dark:bg-accent-dark" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={personal.resumeUrl}
            download
            className="hidden items-center gap-2 rounded-full border border-line/80 bg-card/60 px-3.5 py-1.5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-line-dark dark:bg-card-dark/60 dark:text-ink-dark dark:hover:border-accent-dark dark:hover:text-accent-dark sm:inline-flex"
          >
            <Download size={14} />
            CV
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line/80 dark:border-line-dark md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="overflow-hidden border-t border-line/60 bg-bg/95 glass dark:border-line-dark/60 dark:bg-bg-dark/95 md:hidden"
      >
        <ul className="mx-auto flex max-w-content flex-col gap-1 px-5 py-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm text-muted hover:bg-line/40 hover:text-ink dark:text-muted-dark dark:hover:bg-line-dark/40 dark:hover:text-ink-dark"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personal.resumeUrl}
              download
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm font-medium text-white"
            >
              <Download size={14} /> Download CV
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}
