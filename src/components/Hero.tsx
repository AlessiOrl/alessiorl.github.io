import { motion } from 'framer-motion';
import { ArrowDownRight, Github, MoveRight } from 'lucide-react';
import { heroMetrics, terminalLines } from '../data';
import { useTypewriter } from '../hooks/useTypewriter';

export function Hero() {
  const typedLine = useTypewriter(terminalLines);

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-32 lg:pt-36">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(0,229,160,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.16),transparent_30%)]" />
      <div className="absolute inset-0 -z-10 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px] dark:opacity-30" />

      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="inline-flex rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.28em] text-teal-300">
            &gt; ./orlandoslab
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-zinc-950 dark:text-zinc-50 sm:text-6xl lg:text-8xl">
            I build the layer beneath a more interesting everyday life.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Alessio Orlando works across software engineering, self-hosted infrastructure, local AI, electronics,
            automation, 3D printing, and the slower rituals that make technical work feel human.
          </p>

          <div className="mt-8 inline-flex max-w-xl items-center gap-3 rounded-full border border-zinc-300/70 bg-white/75 px-4 py-2 text-sm text-zinc-700 shadow-[0_15px_40px_rgba(15,23,42,0.08)] dark:border-white/8 dark:bg-white/5 dark:text-zinc-300 dark:shadow-none">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Quiet infrastructure. Useful AI. Hardware that earns its place. Coffee worth dialing in twice.
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#build"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-400/20 bg-teal-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-teal-300"
            >
              See what I build
              <ArrowDownRight size={16} />
            </a>
            <a
              href="https://github.com/AlessiOrl"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300/70 bg-white/80 px-6 py-3 text-sm font-semibold text-zinc-900 transition duration-300 hover:-translate-y-0.5 hover:border-teal-400/40 hover:text-teal-600 dark:border-white/10 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:border-teal-300/30 dark:hover:text-teal-200"
            >
              Visit GitHub
              <Github size={16} />
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroMetrics.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                className="rounded-[1.75rem] border border-zinc-300/60 bg-white/75 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/8 dark:bg-white/5 dark:shadow-none"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
              >
                <Icon className="mb-4 text-teal-500 dark:text-teal-300" size={18} />
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-500">
                  {label}
                </p>
                <p className="mt-3 text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-200">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-4 shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between rounded-[1.4rem] border border-white/8 bg-white/4 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-zinc-500">
                runtime / builder-status
              </span>
            </div>

            <div className="mt-4 rounded-[1.6rem] border border-white/8 bg-black/35 p-5 font-mono text-sm text-zinc-300">
              <div className="flex items-center gap-2 text-teal-300">
                <MoveRight size={16} />
                <span>alessio@orlandoslab:~$</span>
              </div>
              <div className="mt-3 min-h-7 text-base text-zinc-100">
                {typedLine}
                <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-teal-300 align-middle" />
              </div>

              <div className="mt-8 grid gap-3">
                {[
                  ['homelab health', 'stable'],
                  ['docker services', 'online'],
                  ['local llm nodes', 'warm'],
                  ['printer status', 'ready'],
                ].map(([name, value]) => (
                  <div key={name} className="flex items-center justify-between rounded-2xl border border-white/6 bg-white/3 px-4 py-3">
                    <span className="text-zinc-500">{name}</span>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-emerald-300">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-teal-300/20 bg-teal-300/6 p-4 text-sm leading-7 text-zinc-300">
                Current focus: building systems that feel invisible when they work and unforgettable when you inspect them.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}