import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [easterEggVisible, setEasterEggVisible] = useState(false);

  return (
    <motion.footer
      className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-4 rounded-[2rem] border border-zinc-300/60 bg-white/75 px-6 py-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] dark:border-white/8 dark:bg-white/4 dark:shadow-none sm:flex-row sm:items-center sm:justify-between">
        <div>
          <button
            type="button"
            onMouseEnter={() => setEasterEggVisible(true)}
            onMouseLeave={() => setEasterEggVisible(false)}
            className="text-left text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Built by Alessio Orlando · 2026
          </button>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
            {easterEggVisible ? '> echo "thanks for scrolling"' : 'systems / maker / coffee / iteration'}
          </p>
        </div>

        <a
          href="https://github.com/AlessiOrl"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-zinc-300/70 bg-white/85 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:border-teal-400/40 hover:text-teal-600 dark:border-white/10 dark:bg-zinc-950/60 dark:text-zinc-100 dark:hover:border-teal-300/30 dark:hover:text-teal-200"
        >
          <Github size={18} />
          GitHub
        </a>
      </div>
    </motion.footer>
  );
}