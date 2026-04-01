import { motion } from 'framer-motion';

export function BlueprintIllustration() {
  return (
    <div className="relative overflow-hidden rounded-[1.8rem] border border-zinc-300/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(224,242,254,0.9))] p-4 dark:border-white/8 dark:bg-[linear-gradient(135deg,rgba(8,15,22,0.98),rgba(12,28,28,0.9))]">
      <div className="glow-orb absolute -right-8 top-4 h-24 w-24 rounded-full bg-teal-300/20 blur-2xl" />
      <div className="glow-orb absolute -left-4 bottom-0 h-20 w-20 rounded-full bg-cyan-300/20 blur-2xl" />

      <motion.svg
        viewBox="0 0 420 240"
        className="relative z-10 h-52 w-full"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <linearGradient id="blueprintLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(45,212,191,0.9)" />
            <stop offset="100%" stopColor="rgba(125,211,252,0.85)" />
          </linearGradient>
        </defs>

        {Array.from({ length: 8 }, (_, index) => (
          <line
            key={`h-${index}`}
            x1="24"
            y1={28 + index * 24}
            x2="396"
            y2={28 + index * 24}
            stroke="rgba(148,163,184,0.18)"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 10 }, (_, index) => (
          <line
            key={`v-${index}`}
            x1={32 + index * 36}
            y1="20"
            x2={32 + index * 36}
            y2="220"
            stroke="rgba(148,163,184,0.14)"
            strokeWidth="1"
          />
        ))}

        <rect x="84" y="48" width="168" height="100" rx="18" fill="rgba(15,23,42,0.16)" stroke="url(#blueprintLine)" strokeWidth="2.4" />
        <rect x="112" y="72" width="112" height="54" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(125,211,252,0.5)" strokeWidth="1.8" strokeDasharray="6 6" />
        <path d="M120 172 L150 148 L184 178 L224 136 L266 164" fill="none" stroke="url(#blueprintLine)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="120" cy="172" r="5" fill="rgba(45,212,191,0.95)" />
        <circle cx="150" cy="148" r="5" fill="rgba(45,212,191,0.95)" />
        <circle cx="184" cy="178" r="5" fill="rgba(125,211,252,0.95)" />
        <circle cx="224" cy="136" r="5" fill="rgba(125,211,252,0.95)" />
        <circle cx="266" cy="164" r="5" fill="rgba(45,212,191,0.95)" />
        <rect x="286" y="66" width="58" height="96" rx="12" fill="rgba(15,23,42,0.14)" stroke="rgba(45,212,191,0.7)" strokeWidth="2" />
        <path d="M302 92 H328" stroke="rgba(125,211,252,0.7)" strokeWidth="2" />
        <path d="M302 110 H328" stroke="rgba(125,211,252,0.55)" strokeWidth="2" />
        <path d="M302 128 H320" stroke="rgba(125,211,252,0.4)" strokeWidth="2" />
        <circle cx="314" cy="150" r="10" fill="rgba(45,212,191,0.12)" stroke="rgba(45,212,191,0.8)" strokeWidth="2" />
        <path d="M322 56 C350 42, 370 42, 388 60" fill="none" stroke="rgba(45,212,191,0.45)" strokeWidth="2" strokeDasharray="6 8" />
      </motion.svg>

      <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-3">
        {[
          ['prototype', 'fit before polish'],
          ['iterate', 'solve the real friction'],
          ['ship', 'keep the lessons'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-zinc-300/60 bg-white/70 px-4 py-3 dark:border-white/8 dark:bg-white/4">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-zinc-500">{label}</p>
            <p className="mt-2 text-sm font-medium text-zinc-800 dark:text-zinc-200">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}