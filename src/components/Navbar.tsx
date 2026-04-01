import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MoonStar, SunMedium, X } from 'lucide-react';
import { useState } from 'react';

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  items: NavItem[];
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

export function Navbar({ items, theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-zinc-950/70 px-5 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70 light-surface sm:px-6">
          <a href="#top" className="group inline-flex items-center gap-3" onClick={closeMenu}>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal-400/20 bg-teal-400/10 font-mono text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
              AO
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.32em] text-zinc-500 dark:text-zinc-500">
                OrlandosLab
              </span>
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Builder in public and at home</span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-600 transition-colors duration-200 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle color theme"
              onClick={onToggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300/60 bg-white/80 text-zinc-800 transition hover:border-teal-400/40 hover:text-teal-500 dark:border-white/10 dark:bg-zinc-900/90 dark:text-zinc-100 dark:hover:border-teal-300/30 dark:hover:text-teal-300"
            >
              {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
            </button>
            <button
              type="button"
              aria-label="Open navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300/60 bg-white/80 text-zinc-800 transition md:hidden dark:border-white/10 dark:bg-zinc-900/90 dark:text-zinc-100"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-x-4 top-24 z-40 rounded-[2rem] border border-white/10 bg-zinc-950/95 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-3">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm font-medium text-zinc-100 transition hover:border-teal-300/20 hover:text-teal-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}