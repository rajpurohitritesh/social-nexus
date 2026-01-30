import { ArrowRight, ChevronDown, Mail, Rocket } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function FloatingParticle({ delay = 0 }) {
  const [position, setPosition] = useState({ x: Math.random() * 100, y: Math.random() * 100 })
  const ref = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
      })
    }, 3000 + delay * 1000)

    return () => clearInterval(interval)
  }, [delay])

  return (
    <div
      ref={ref}
      className="absolute size-2 rounded-full bg-gradient-to-br from-nx-primary/40 to-nx-secondary/40 blur-sm transition-all duration-[3000ms]"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDelay: `${delay}ms`,
      }}
    />
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[80vh] overflow-hidden border-b border-nx-border bg-gradient-to-b from-nx-bg via-nx-bg to-nx-card/30 sm:min-h-[85vh]">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <FloatingParticle key={i} delay={i * 200} />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute -right-32 -top-32 size-96 rounded-full bg-gradient-to-br from-nx-primary/20 via-nx-secondary/15 to-nx-accent/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-gradient-to-br from-nx-accent/20 via-nx-primary/15 to-nx-secondary/10 blur-3xl" />

      <div className="nx-container relative z-10 flex min-h-[80vh] flex-col items-center justify-center py-12 text-center sm:min-h-[85vh] sm:py-20">
        <div
          className={`space-y-6 transition-all duration-700 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className="text-3xl font-black leading-tight tracking-tight xs:text-4xl sm:text-4xl md:text-6xl lg:text-7xl">
            We Build Brands for the{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-nx-primary via-nx-secondary to-nx-accent bg-clip-text text-transparent">
                Digital World
              </span>
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-nx-primary/50 via-nx-secondary/50 to-nx-accent/50 blur-sm" />
            </span>
          </h1>

          <p
            className={`mx-auto max-w-2xl text-lg leading-relaxed text-nx-muted transition-all duration-700 delay-150 ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Where Brands Become Digital Powerhouses
            <br />
            <span className="text-sm text-nx-muted/80">Powered by SGCA Technologies</span>
          </p>

          <div
            className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-300 ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <Link to="/contact" className="group nx-btn-primary text-base px-6 py-3.5">
              <Rocket className="size-5 shrink-0 transition-transform duration-300 group-hover:rotate-12" aria-hidden />
              <span>Get Started</span>
              <ArrowRight className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
            <Link to="/contact" className="group nx-btn-ghost text-base px-6 py-3.5">
              <Mail className="size-5 shrink-0" aria-hidden />
              <span className="hidden sm:inline">Talk to Our Experts</span>
              <span className="sm:hidden">Experts</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-nx-muted">
            <span className="text-xs font-medium">Scroll to explore</span>
            <ChevronDown className="size-5 animate-floaty" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}
