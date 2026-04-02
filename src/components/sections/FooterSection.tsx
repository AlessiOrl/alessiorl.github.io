import { ScrollReveal } from '../ui/ScrollReveal'

const contactItems = [
  {
    label: 'Email',
    value: 'hello@placeholder.dev',
    href: 'mailto:hello@placeholder.dev',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/placeholder',
    href: 'https://linkedin.com/in/placeholder',
  },
  {
    label: 'GitHub',
    value: 'github.com/placeholder',
    href: 'https://github.com/placeholder',
  },
]

const footerLinks = [
  { label: 'Work', href: '#scope-projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function FooterSection() {
  return (
    <footer id="contact" className="footer-section relative overflow-hidden pt-0 pb-10 md:pt-0 md:pb-12">
      <div className="page-shell">
        <ScrollReveal className="footer-panel" direction="up" distance={36}>
          <div className="footer-grid">
            <div>
              <p className="footer-kicker">Conclusion / contact</p>
              <h2 className="footer-title">If something here feels worth talking about, that is probably the right reason to reach out.</h2>
              <p className="footer-lead">
                Placeholder contact details for now, but this is the natural end of the page:
                a quiet sign-off, a few useful links, and an easy way to continue the conversation.
              </p>
            </div>

            <div className="footer-contact-list">
              {contactItems.map((item) => (
                <a key={item.label} href={item.href} className="footer-contact-card">
                  <p className="footer-contact-label">{item.label}</p>
                  <p className="footer-contact-value">{item.value}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-signoff">
              Built as a field journal of systems, craft, and projects that matter for different reasons.
            </p>

            <nav aria-label="Footer" className="footer-nav">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer-nav-link">
                  {link.label}
                </a>
              ))}
            </nav>

            <p className="footer-credit">Alessio Orlando. Placeholder footer note. 2026.</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
