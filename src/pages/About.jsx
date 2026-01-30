import { Eye, Target } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function About() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section ref={ref} className="nx-container py-16 md:py-24">
      {/* Hero Heading */}
      <div
        className={`mb-16 text-center transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h1 className="text-3xl font-black tracking-tight md:text-5xl lg:text-6xl">
          About{' '}
          <span className="bg-gradient-to-r from-nx-primary via-nx-secondary to-nx-accent bg-clip-text text-transparent">
            Social Nexus
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-nx-muted md:text-lg">
          We're a creative + technical team helping brands stand out, scale faster, and stay consistent across every
          digital touchpoint—powered by SGCA Technologies.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid gap-8 md:grid-cols-2">
        <div
          className={`nx-card p-6 transition-all duration-700 md:p-10 ${
            visible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}
        >
          <div className="nx-icon-box mb-4 size-14 sm:size-16">
            <Eye className="size-7 text-nx-primary sm:size-8" aria-hidden />
          </div>
          <h2 className="mb-4 text-xl font-extrabold tracking-tight sm:text-2xl">Our Vision</h2>
          <p className="text-base leading-relaxed text-nx-muted">
            To be the leading digital agency where brands transform into digital powerhouses. We envision a world where
            every brand has the tools, strategy, and creative excellence to thrive in the digital landscape.
          </p>
        </div>

        <div
          className={`nx-card p-6 transition-all duration-700 delay-150 md:p-10 ${
            visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}
        >
          <div className="nx-icon-box mb-4 size-14 sm:size-16">
            <Target className="size-7 text-nx-primary sm:size-8" aria-hidden />
          </div>
          <h2 className="mb-4 text-xl font-extrabold tracking-tight sm:text-2xl">Our Mission</h2>
          <p className="text-base leading-relaxed text-nx-muted">
            To deliver exceptional digital experiences through strategic thinking, creative innovation, and technical
            excellence. We empower brands to connect with their audiences authentically and achieve measurable growth.
          </p>
        </div>
      </div>

      {/* Powered by SGCA Technologies */}
      <div
        className={`mt-12 nx-card border-2 border-nx-primary/30 bg-gradient-to-br from-nx-primary/10 via-nx-secondary/5 to-nx-accent/10 p-8 transition-all duration-700 delay-300 md:p-12 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-xl border border-nx-border bg-white/10 px-4 py-2 text-sm font-semibold">
            <span className="size-2 rounded-full bg-nx-success" />
            Powered by SGCA Technologies
          </div>
          <h3 className="mb-4 text-2xl font-extrabold tracking-tight md:text-3xl">
            Built on Innovation & Excellence
          </h3>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-nx-muted">
            Social Nexus is backed by SGCA Technologies, a leader in digital innovation. This partnership ensures we
            deliver cutting-edge solutions, reliable infrastructure, and scalable technologies that power your brand's
            success.
          </p>
        </div>
      </div>
    </section>
  )
}
