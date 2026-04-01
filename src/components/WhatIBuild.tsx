import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data';
import { SectionHeading } from './SectionHeading';

const toneClasses = {
  teal: 'border-teal-400/20 bg-teal-400/10 text-teal-200 dark:text-teal-200',
  amber: 'border-amber-400/20 bg-amber-400/10 text-amber-200 dark:text-amber-200',
  violet: 'border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200 dark:text-fuchsia-200',
};

function ProjectPreview({
  previewKind,
  previewRows,
  previewTitle,
}: {
  previewKind: 'nodes' | 'chat' | 'grid';
  previewRows: Array<{ label: string; value: string; tone: 'teal' | 'amber' | 'violet' }>;
  previewTitle: string;
}) {
  return (
    <div className="mt-10 overflow-hidden rounded-[1.6rem] border border-zinc-300/60 bg-zinc-950 p-5 text-zinc-100 shadow-[0_25px_70px_rgba(0,0,0,0.18)] dark:border-white/8">
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-zinc-500">{previewTitle}</span>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
      </div>

      {previewKind === 'nodes' ? (
        <div className="relative mt-6 h-28 rounded-[1.25rem] border border-white/6 bg-white/4 p-4">
          <div className="absolute left-12 right-12 top-14 h-px bg-gradient-to-r from-teal-300/30 via-cyan-300/70 to-violet-300/30" />
          <div className="relative flex h-full items-center justify-between">
            {['macropad', 'router', 'scene'].map((node, index) => (
              <div key={node} className="flex flex-col items-center gap-3">
                <div className={`h-4 w-4 rounded-full ${index === 0 ? 'bg-teal-300' : index === 1 ? 'bg-cyan-300' : 'bg-fuchsia-300'} shadow-[0_0_18px_currentColor]`} />
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-zinc-500">{node}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {previewKind === 'chat' ? (
        <div className="mt-6 space-y-3 rounded-[1.25rem] border border-white/6 bg-white/4 p-4">
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-teal-400/14 px-4 py-3 text-sm text-zinc-200">
            summarize tonight's docker alerts
          </div>
          <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/7 px-4 py-3 text-sm text-zinc-300">
            2 containers restarted, storage healthy, automations still online. Want the full trace?
          </div>
          <div className="ml-auto max-w-[72%] rounded-2xl rounded-br-md bg-fuchsia-400/12 px-4 py-3 text-sm text-zinc-200">
            send it and queue tomorrow's check
          </div>
        </div>
      ) : null}

      {previewKind === 'grid' ? (
        <div className="mt-6 rounded-[1.25rem] border border-white/6 bg-white/4 p-4">
          <div className="grid grid-cols-8 gap-1.5">
            {Array.from({ length: 40 }, (_, index) => (
              <div
                key={index}
                className={`aspect-square rounded-[0.35rem] ${index % 7 === 0 ? 'bg-teal-300/80' : index % 5 === 0 ? 'bg-fuchsia-300/70' : index % 3 === 0 ? 'bg-amber-300/70' : 'bg-white/10'}`}
              />
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {previewRows.map((row) => (
          <div key={row.label} className={`rounded-2xl border px-4 py-3 ${toneClasses[row.tone]}`}>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em]">{row.label}</p>
            <p className="mt-2 text-sm font-semibold">{row.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WhatIBuild() {
  return (
    <section id="build" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <SectionHeading
        eyebrow="// projects"
        title="What I build usually starts as a small fix and ends up becoming part of a larger ecosystem."
        description={
          <p>
            The point is not collecting side projects. The point is making software, hardware, and automations
            cooperate until they feel less like gadgets and more like a personal operating environment.
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

              <ProjectPreview
                previewKind={project.previewKind}
                previewRows={project.previewRows}
                previewTitle={project.previewTitle}
              />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}