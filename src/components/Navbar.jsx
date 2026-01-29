import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Logo.jsx'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

function useScrolled(threshold = 8) {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return isScrolled
}

export function Navbar() {
  const { pathname } = useLocation()
  const isScrolled = useScrolled(10)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => setMobileOpen(false), [pathname])

  const desktopItems = useMemo(() => navItems.filter((x) => x.to !== '/'), [])

  return (
    <header className="sticky top-0 z-50">
      <div
        className={[
          'border-b transition duration-300',
          isScrolled ? 'border-nx-border bg-nx-bg/70 backdrop-blur' : 'border-transparent bg-transparent',
        ].join(' ')}
      >
        <div className="nx-container">
          <div className="flex h-16 items-center justify-between gap-3">
            <Link to="/" className="group">
              <Logo className="transition duration-300 group-hover:opacity-95" />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {desktopItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'rounded-xl px-3 py-2 text-sm font-semibold transition duration-300',
                      isActive ? 'bg-white/10 text-nx-fg' : 'text-nx-fg/70 hover:text-nx-fg hover:bg-white/5',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <Link to="/contact" className="nx-btn-ghost">
                Talk to Our Experts
              </Link>
              <Link to="/contact" className="nx-btn-primary">
                Get Started
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-nx-border bg-white/5 p-2 text-nx-fg/90 transition duration-300 hover:bg-white/10 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d={
                    mobileOpen
                      ? 'M18.3 5.7a1 1 0 0 1 0 1.4L13.4 12l4.9 4.9a1 1 0 1 1-1.4 1.4L12 13.4l-4.9 4.9a1 1 0 1 1-1.4-1.4l4.9-4.9-4.9-4.9a1 1 0 0 1 1.4-1.4l4.9 4.9 4.9-4.9a1 1 0 0 1 1.4 0Z'
                      : 'M4 6.5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 5.5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 5.5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z'
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-nx-border bg-nx-bg/90 backdrop-blur lg:hidden">
            <div className="nx-container py-3">
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      [
                        'rounded-xl px-3 py-2 text-sm font-semibold transition duration-300',
                        isActive ? 'bg-white/10 text-nx-fg' : 'text-nx-fg/70 hover:text-nx-fg hover:bg-white/5',
                      ].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <div className="mt-3 grid gap-2">
                <Link to="/contact" className="nx-btn-ghost w-full">
                  Talk to Our Experts
                </Link>
                <Link to="/contact" className="nx-btn-primary w-full">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}

