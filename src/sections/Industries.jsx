import { useEffect, useRef, useState } from 'react'

const industries = [
  { icon: '🚀', name: 'Startups', description: 'Launch and scale your brand from day one.' },
  { icon: '🎓', name: 'Education', description: 'Engage students and build community.' },
  { icon: '🛒', name: 'E-commerce', description: 'Drive sales with strategic digital marketing.' },
  { icon: '🏢', name: 'Corporate', description: 'Professional branding and B2B growth.' },
  { icon: '✨', name: 'Influencers', description: 'Personal brand development and monetization.' },
  { icon: '🏨', name: 'Real Estate & Hospitality', description: 'Showcase properties and experiences.' },
]

export function Industries() {
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
    <section ref={ref} className="border-y border-nx-border bg-nx-card/30 py-16 md:py-24">
      <div className="nx-container">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Industries We <span className="bg-gradient-to-r from-nx-primary to-nx-secondary bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-nx-muted">
            Tailored solutions for brands across diverse industries and markets.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className={`group nx-card p-6 transition-all duration-700 hover:scale-[1.02] hover:border-nx-primary/30 hover:shadow-glow md:p-8 ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex size-16 items-center justify-center rounded-xl border border-nx-border bg-gradient-to-br from-nx-primary/20 via-nx-secondary/15 to-nx-accent/10 text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {industry.icon}
              </div>
              <h3 className="mb-2 text-lg font-extrabold tracking-tight">{industry.name}</h3>
              <p className="text-sm leading-relaxed text-nx-muted">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
