import { motion } from 'framer-motion';
import { systemNodes } from '../data';
import { SectionHeading } from './SectionHeading';

export function Systems() {
  return (
    <section id="systems" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="// systems"
          title="Infrastructure, local AI, and home automation are one connected ecosystem."
          description={
            <p>
              This is the layer where experimentation becomes durable. Self-hosted services, containers,
              local models, and domotics are designed to work together like a personal operating system.
            </p>
          }
        />

        <div className="grid gap-5 md:grid-cols-2">
          {systemNodes.map((node, index) => {
            const Icon = node.icon;

            return (
              <motion.article
                key={node.title}
                className="rounded-[1.8rem] border border-white/8 bg-zinc-950 p-6 text-zinc-100 shadow-[0_35px_90px_rgba(0,0,0,0.3)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-300/10 bg-teal-300/10 text-teal-300">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-zinc-500">{node.label}</span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">{node.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{node.description}</p>

                <div className="mt-6 rounded-2xl border border-white/8 bg-black/30 px-4 py-3 font-mono text-sm text-emerald-300">
                  $ {node.command}
                </div>

                <div className="mt-6 space-y-3">
                  {node.bullets.map((bullet) => (
                    <div key={bullet} className="rounded-2xl border border-white/6 bg-white/4 px-4 py-3 text-sm text-zinc-300">
                      {bullet}
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}