import { motion } from 'framer-motion';
import { lifestyleItems } from '../data';
import { SectionHeading } from './SectionHeading';

export function BeyondCode() {
  return (
    <section id="life" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <SectionHeading
        eyebrow="// life"
        title="The same curiosity that builds systems also shows up in coffee, citrus, and dough."
        description={
          <p>
            Not everything interesting is screen-shaped. Some of the best iterations happen over a grinder,
            a bottle steeping on a shelf, or a pizza stone pushed a little hotter than last time.
          </p>
        }
        align="center"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {lifestyleItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24, rotate: index === 1 ? 0 : index === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[2rem] border border-amber-300/30 bg-[linear-gradient(180deg,rgba(255,248,234,0.95),rgba(255,239,213,0.92))] p-7 shadow-[0_25px_70px_rgba(180,83,9,0.12)] transition duration-300 hover:-translate-y-1 dark:border-amber-300/10 dark:bg-[linear-gradient(180deg,rgba(38,24,10,0.92),rgba(22,16,8,0.95))] dark:shadow-none"
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${item.accent}`} />
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-300/20 text-amber-700 dark:text-amber-200">
                <Icon size={22} />
              </div>
              <p className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-amber-700/75 dark:text-amber-200/70">
                {item.kicker}
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-amber-50">{item.title}</h3>
              <p className="mt-5 text-base leading-8 text-zinc-700 dark:text-zinc-300">{item.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}