import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      className={`flex max-w-3xl flex-col gap-4 ${alignment}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="font-mono text-xs font-bold uppercase tracking-[0.34em] text-teal-300/80 dark:text-teal-300/80">
        {eyebrow}
      </span>
      <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-zinc-950 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <div className="max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg">{description}</div>
    </motion.div>
  );
}