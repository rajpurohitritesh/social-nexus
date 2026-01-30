import {
  BarChart3,
  Check,
  DollarSign,
  Palette,
  Rocket,
  Target,
  Users,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const reasons = [
  {
    icon: Target,
    title: 'One-Stop Digital Solution',
    description: 'From strategy to execution, we handle every aspect of your digital presence.',
  },
  {
    icon: Palette,
    title: 'Creative + Technical Expertise',
    description: 'A team that combines artistic vision with engineering excellence.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Strategies',
    description: 'Every decision backed by analytics, insights, and measurable outcomes.',
  },
  {
    icon: Users,
    title: 'Dedicated Brand Managers',
    description: 'Personal attention and consistent communication throughout your journey.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Clear, upfront pricing with no hidden fees or surprises.',
  },
  {
    icon: Rocket,
    title: 'Backed by SGCA Technologies',
    description: 'Built on a foundation of innovation, reliability, and cutting-edge technology.',
  },
]

export function WhyChoose() {
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
    <section ref={ref} className="nx-container py-12 sm:py-16 md:py-24">
      <div
        className={`mb-10 text-center transition-all duration-700 sm:mb-12 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2 className="text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
          Why Choose <span className="bg-gradient-to-r from-nx-primary to-nx-secondary bg-clip-text text-transparent">Social Nexus</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-nx-muted sm:mt-4 sm:text-base">
          We combine creativity, strategy, and technology to deliver results that matter.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => {
          const Icon = reason.icon
          return (
            <div
              key={reason.title}
              className={`nx-card p-5 transition-all duration-700 hover:scale-[1.02] hover:border-nx-primary/25 hover:shadow-cardhover active:scale-[0.99] sm:p-6 md:p-8 ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="nx-icon-box">
                  <Icon className="size-6 text-nx-primary sm:size-6" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <Check className="size-5 shrink-0 text-nx-success" aria-hidden />
                    <h3 className="text-base font-extrabold tracking-tight sm:text-lg">{reason.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-nx-muted">{reason.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
