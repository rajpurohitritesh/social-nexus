import { useEffect, useRef, useState } from 'react'

const reasons = [
  {
    icon: '🎯',
    title: 'One-Stop Digital Solution',
    description: 'From strategy to execution, we handle every aspect of your digital presence.',
  },
  {
    icon: '🎨',
    title: 'Creative + Technical Expertise',
    description: 'A team that combines artistic vision with engineering excellence.',
  },
  {
    icon: '📊',
    title: 'Data-Driven Strategies',
    description: 'Every decision backed by analytics, insights, and measurable outcomes.',
  },
  {
    icon: '👥',
    title: 'Dedicated Brand Managers',
    description: 'Personal attention and consistent communication throughout your journey.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    description: 'Clear, upfront pricing with no hidden fees or surprises.',
  },
  {
    icon: '🚀',
    title: 'Backed by SGCA Technologies',
    description: 'Built on a foundation of innovation, reliability, and cutting-edge technology.',
  },
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 flex-shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
      />
    </svg>
  )
}

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
    <section ref={ref} className="nx-container py-16 md:py-24">
      <div
        className={`mb-12 text-center transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Why Choose <span className="bg-gradient-to-r from-nx-primary to-nx-secondary bg-clip-text text-transparent">Social Nexus</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-nx-muted">
          We combine creativity, strategy, and technology to deliver results that matter.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <div
            key={reason.title}
            className={`nx-card p-6 transition-all duration-700 md:p-8 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="mb-4 flex items-start gap-4">
              <div className="inline-flex size-12 items-center justify-center rounded-xl border border-nx-border bg-gradient-to-br from-nx-primary/20 via-nx-secondary/15 to-nx-accent/10 text-xl">
                {reason.icon}
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <CheckIcon />
                  <h3 className="text-lg font-extrabold tracking-tight">{reason.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-nx-muted">{reason.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
