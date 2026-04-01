import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data';
import { SectionHeading } from './SectionHeading';

export function WhatIBuild() {
  return (
    <section id="build" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <SectionHeading
        eyebrow="// projects"
        title="What I build is part toolset, part playground, part long-term system design."
        description={
          <p>
            The interesting part is not just shipping isolated projects. It is how hardware, AI,
            automation, and software fit together into workflows that are actually enjoyable to live with.
          </p>
        }
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-[2rem] border border-zinc-300/60 bg-white/75 p-7 shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 dark:border-white/8 dark:bg-white/5 dark:shadow-none ${index === 0 ? 'lg:row-span-2 min-h-[28rem]' : 'min-h-[13rem]'}`}
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${project.accent}`} />
              <div className="flex items-start justify-between gap-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/80 text-teal-300 shadow-[0_20px_40px_rgba(0,0,0,0.24)] dark:bg-zinc-950/80">
                  <Icon size={22} />
                </div>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-300/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700 transition hover:border-teal-400/40 hover:text-teal-600 dark:border-white/8 dark:bg-white/6 dark:text-zinc-200 dark:hover:border-teal-300/30 dark:hover:text-teal-200"
                  >
                    Open
                    <ArrowUpRight size={14} />
                  </a>
                ) : null}
              </div>

              <div className="mt-10 flex flex-col gap-5">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-500">
                  {project.meta}
                </p>
                <h3 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-zinc-100">
                  {project.title}
                </h3>
                <p className="max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">{project.description}</p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {project.stats.map((stat) => (
                  <div key={stat} className="rounded-2xl border border-zinc-300/60 bg-white/65 px-4 py-4 text-sm font-medium text-zinc-700 dark:border-white/8 dark:bg-black/20 dark:text-zinc-300">
                    {stat}
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}