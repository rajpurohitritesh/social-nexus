import { Link } from 'react-router-dom'
import { Logo } from './Logo.jsx'

const quickLinks = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'How We Work' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

const legalLinks = [
  { to: '/contact', label: 'Privacy' },
  { to: '/contact', label: 'Terms' },
]

function SocialIcon({ title, children }) {
  return (
    <a
      href="#"
      className="grid min-h-[44px] min-w-[44px] place-items-center rounded-xl border border-nx-border bg-white/5 text-nx-fg/80 transition-all duration-300 hover:border-nx-primary/30 hover:bg-white/10 hover:text-nx-fg active:scale-95 touch-manipulation"
      aria-label={title}
    >
      {children}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-nx-border bg-nx-bg">
      <div className="nx-container py-8 sm:py-10">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-nx-muted">
              Social Nexus is a digital media & branding agency where brands become digital powerhouses—built with a
              creative edge, engineered for growth, and backed by SGCA Technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-extrabold tracking-tight">Quick Links</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {quickLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="nx-link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-extrabold tracking-tight">Legal</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="nx-link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-extrabold tracking-tight">Connect</h3>
            <div className="flex flex-wrap gap-2">
              <SocialIcon title="Instagram">
                <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4Zm-4.5 4a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM17.75 6.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon title="LinkedIn">
                <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M6.5 6.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM5 21V9h3v12H5Zm7-12h2.9v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-5.9c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21h-3V9Z"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon title="X">
                <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.3L6.4 22H3.2l7.3-8.4L1 2h6.3l4.4 5.7L18.9 2Zm-1.1 18h1.7L7.2 3.9H5.4L17.8 20Z"
                  />
                </svg>
              </SocialIcon>
            </div>

            <div className="rounded-2xl border border-nx-border bg-white/5 p-4">
              <div className="text-sm font-semibold text-nx-fg">Powered by SGCA Technologies</div>
              <div className="mt-1 text-sm text-nx-muted">Built for speed, clarity, and conversions.</div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-nx-border pt-6 text-sm text-nx-muted md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Social Nexus. All rights reserved.</div>
          <div className="text-nx-muted">Where Brands Become Digital Powerhouses</div>
        </div>
      </div>
    </footer>
  )
}

