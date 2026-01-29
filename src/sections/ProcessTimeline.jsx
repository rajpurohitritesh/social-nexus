import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your brand, goals, and audience to create a strategic roadmap.',
  },
  {
    number: '02',
    title: 'Planning & Design',
    description: 'Creative concepts and detailed plans that align with your vision and objectives.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Seamless implementation with regular updates and transparent communication.',
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'Continuous refinement based on data, feedback, and performance metrics.',
  },
  {
    number: '05',
    title: 'Growth & Support',
    description: 'Ongoing support and strategic adjustments to ensure sustained growth.',
  },
]

export function ProcessTimeline() {
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
    <div ref={ref} className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-nx-primary via-nx-secondary to-nx-accent md:left-1/2 md:-translate-x-0.5" />

      <div className="space-y-8">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`relative flex gap-6 transition-all duration-700 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex size-16 flex-shrink-0 items-center justify-center rounded-full border-4 border-nx-bg bg-gradient-to-br from-nx-primary via-nx-secondary to-nx-accent shadow-glow">
              <span className="text-xs font-black text-nx-bg">{step.number}</span>
            </div>

            {/* Content card */}
            <div className="flex-1 nx-card p-6 md:p-8">
              <h3 className="mb-2 text-xl font-extrabold tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-nx-muted">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
