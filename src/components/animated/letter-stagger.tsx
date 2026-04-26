"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035, delayChildren: 0.15 },
  },
};

const letter: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 0.9, 0.32, 1] },
  },
};

export function LetterStagger({
  text,
  className = "",
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      <motion.span
        aria-label={text}
        variants={container}
        initial="hidden"
        animate="show"
        className="inline-flex flex-wrap"
      >
        {words.map((word, wi) => (
          <span key={wi} className="inline-flex overflow-hidden whitespace-nowrap pb-1">
            {Array.from(word).map((ch, ci) => (
              <motion.span key={ci} variants={letter} className="inline-block">
                {ch}
              </motion.span>
            ))}
            {wi < words.length - 1 && (
              <motion.span variants={letter} className="inline-block">
                &nbsp;
              </motion.span>
            )}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
