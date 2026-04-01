import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

const columns = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: 2 + index * 5.5,
  duration: 7 + (index % 5),
  delay: index * -0.55,
  text: index % 3 === 0 ? 'AO // BUILD' : index % 3 === 1 ? '01 10 01' : 'LAB MODE',
}));

type EasterEggOverlayProps = {
  active: boolean;
  onClose: () => void;
};

export function EasterEggOverlay({ active, onClose }: EasterEggOverlayProps) {
  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[80] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.14),transparent_38%),rgba(2,6,23,0.92)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px] opacity-25" />

          {columns.map((column) => (
            <div
              key={column.id}
              className="matrix-column absolute top-[-20%] font-mono text-[0.72rem] uppercase tracking-[0.34em] text-emerald-300/50"
              style={{
                left: `${column.left}%`,
                animationDuration: `${column.duration}s`,
                animationDelay: `${column.delay}s`,
              }}
            >
              <div className="whitespace-pre leading-8 [writing-mode:vertical-rl]">{column.text}</div>
            </div>
          ))}

          <motion.div
            className="pointer-events-auto absolute left-1/2 top-1/2 w-[min(92vw,38rem)] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-emerald-300/20 bg-zinc-950/88 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-8"
            initial={{ scale: 0.94, opacity: 0, y: 18 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              aria-label="Close secret overlay"
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:border-emerald-300/20 hover:text-emerald-200"
            >
              <X size={16} />
            </button>

            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.32em] text-emerald-300">
              <Sparkles size={14} />
              lab mode enabled
            </div>

            <h3 className="mt-8 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-zinc-50 sm:text-4xl">
              Hidden telemetry says the system is behaving exactly as intended.
            </h3>

            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
              This mode unlocks when the brand gets clicked five times or the keyboard remembers old myths.
              It is a small reminder that polished systems should still leave room for personality leaks.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ['home lab', 'stable and slightly overbuilt'],
                ['maker stack', 'prototyping useful objects'],
                ['daily rituals', 'coffee, dough, iteration'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/8 bg-white/4 p-4">
                  <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-zinc-500">{label}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-200">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}