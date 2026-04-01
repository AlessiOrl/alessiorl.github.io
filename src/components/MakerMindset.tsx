import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { makerSignals } from '../data';
import { BlueprintIllustration } from './BlueprintIllustration';
import { SectionHeading } from './SectionHeading';

export function MakerMindset() {
  return (
    <section id="maker" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="overflow-hidden rounded-[2.5rem] border border-zinc-300/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(229,246,241,0.8))] p-8 shadow-[0_35px_90px_rgba(15,23,42,0.08)] dark:border-white/8 dark:bg-[linear-gradient(135deg,rgba(11,18,22,0.98),rgba(16,35,31,0.9))] dark:shadow-none sm:p-10 lg:p-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="// maker"
            title="Making things by hand changes how you design systems on screen."
            description={
              <p>
                3D printing, DIY electronics, and custom fixes all come from the same instinct: if the useful version does not exist,
                prototype it, tune it, and keep the lessons for the next domain.
              </p>
            }
          />

          <div className="grid gap-5">
            <motion.div
              className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-[2rem] border border-zinc-300/70 bg-white/70 p-6 dark:border-white/8 dark:bg-black/15">
                <BlueprintIllustration />
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-zinc-100">
                  3D printing as applied design
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  Personal fixtures, quick prototypes, and better small objects. The goal is less decoration and more solved friction.
                </p>
              </div>

              <div className="rounded-[2rem] border border-zinc-300/70 bg-zinc-950 p-6 text-zinc-100 shadow-[0_30px_70px_rgba(0,0,0,0.28)] dark:border-white/8">
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.32em] text-zinc-500">
                  <Wrench size={16} className="text-teal-300" />
                  workshop.log
                </div>
                <div className="mt-6 space-y-4">
                  {makerSignals.map((signal, index) => (
                    <motion.div
                      key={signal}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.45, delay: index * 0.1 }}
                      className="rounded-2xl border border-white/8 bg-white/4 px-4 py-4 text-sm leading-7 text-zinc-300"
                    >
                      {signal}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}