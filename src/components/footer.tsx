import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/content/personal";

export function Footer() {
  return (
    <footer className="relative border-t border-line/60 py-10 dark:border-line-dark/60">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-5 text-sm text-muted dark:text-muted-dark md:flex-row md:px-8">
        <p>
          © {new Date().getFullYear()} {personal.name}. Built with Next.js, Tailwind, and care.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="rounded-full border border-line/60 p-2 transition-colors hover:border-accent hover:text-accent dark:border-line-dark/60 dark:hover:border-accent-dark dark:hover:text-accent-dark"
          >
            <Mail size={14} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-line/60 p-2 transition-colors hover:border-accent hover:text-accent dark:border-line-dark/60 dark:hover:border-accent-dark dark:hover:text-accent-dark"
          >
            <Linkedin size={14} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-line/60 p-2 transition-colors hover:border-accent hover:text-accent dark:border-line-dark/60 dark:hover:border-accent-dark dark:hover:text-accent-dark"
          >
            <Github size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
