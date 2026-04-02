const navigationItems = [
  { label: 'Work', href: '#scope-projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export function Header() {
  return (
    <header className="relative z-20 pt-5 md:pt-7">
      <div className="page-shell">
        <div
          className="border-b pb-4 md:pb-6"
          style={{ borderColor: 'color-mix(in srgb, var(--color-border) 78%, transparent)' }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="min-w-0">
              <p className="text-[0.64rem] uppercase tracking-[0.28em] sm:text-[0.7rem] sm:tracking-[0.34em]" style={{ color: 'var(--color-text-muted)' }}>
                Field Notes 2026
              </p>
              <p className="mt-2.5 font-heading text-[1.55rem] leading-[0.95] sm:text-[1.8rem] md:mt-3 md:text-[2.2rem]" style={{ color: 'var(--color-text)' }}>
                Alessio Orlando
              </p>
              <p className="mt-2 max-w-[26rem] text-[0.9rem] leading-5 md:text-[0.95rem]" style={{ color: 'var(--color-text-secondary)' }}>
                Creative Developer / Systems Builder
              </p>
            </div>

            <div
              className="flex flex-col gap-3 border-t pt-4 text-left md:items-end md:border-t-0 md:pt-0 md:text-right"
              style={{ borderColor: 'color-mix(in srgb, var(--color-border) 72%, transparent)' }}
            >
              <p className="text-[0.64rem] uppercase tracking-[0.24em] sm:text-[0.68rem] sm:tracking-[0.3em]" style={{ color: 'var(--color-text-muted)' }}>
                Placeholder Navigation
              </p>

              <nav
                aria-label="Primary placeholder"
                className="grid grid-cols-3 gap-x-3 gap-y-2 text-[0.78rem] sm:flex sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2 sm:text-sm md:justify-end"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="nav-link justify-center text-center uppercase tracking-[0.12em] sm:tracking-[0.18em]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
