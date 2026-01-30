import {
  Building2,
  GraduationCap,
  Home,
  Rocket,
  ShoppingCart,
  Sparkles,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const industries = [
  { icon: Rocket, name: 'Startups', description: 'Launch and scale your brand from day one.' },
  { icon: GraduationCap, name: 'Education', description: 'Engage students and build community.' },
  { icon: ShoppingCart, name: 'E-commerce', description: 'Drive sales with strategic digital marketing.' },
  { icon: Building2, name: 'Corporate', description: 'Professional branding and B2B growth.' },
  { icon: Sparkles, name: 'Influencers', description: 'Personal brand development and monetization.' },
  { icon: Home, name: 'Real Estate & Hospitality', description: 'Showcase properties and experiences.' },
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
    <section ref={ref} className="border-y border-nx-border bg-nx-card/30 py-12 sm:py-16 md:py-24">
      <div className="nx-container">
        <div
          className={`mb-10 text-center transition-all duration-700 sm:mb-12 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
            Industries We <span className="bg-gradient-to-r from-nx-primary to-nx-secondary bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-nx-muted sm:mt-4 sm:text-base">
            Tailored solutions for brands across diverse industries and markets.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={industry.name}
                className={`group nx-card p-5 transition-all duration-700 hover:scale-[1.02] hover:border-nx-primary/25 hover:shadow-cardhover active:scale-[0.99] sm:p-6 md:p-8 ${
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="nx-icon-box-hover mb-4">
                  <Icon className="size-6 text-nx-primary sm:size-7" aria-hidden />
                </div>
                <h3 className="mb-2 text-base font-extrabold tracking-tight sm:text-lg">{industry.name}</h3>
                <p className="text-sm leading-relaxed text-nx-muted">{industry.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
