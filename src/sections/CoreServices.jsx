import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ServiceCard } from '../components/ServiceCard.jsx'

const services = [
  {
    icon: '🎨',
    title: 'Brand Identity & Design',
    description: 'Visual identity systems, logos, brand guidelines, and design assets that make your brand memorable.',
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    description: 'Strategic content planning, community management, and engagement that grows your audience.',
  },
  {
    icon: '🌟',
    title: 'Influencer Marketing',
    description: 'Authentic partnerships and campaigns that connect your brand with the right audiences.',
  },
  {
    icon: '💻',
    title: 'Website Design & Development',
    description: 'Modern, fast, conversion-focused websites built with clean code and beautiful design.',
  },
  {
    icon: '📈',
    title: 'Digital Marketing & Growth',
    description: 'Data-driven campaigns across channels that drive real results and measurable ROI.',
  },
  {
    icon: '🎬',
    title: 'Content Creation & Media Production',
    description: 'High-quality video, photography, and multimedia content that tells your brand story.',
  },
]

export function CoreServices() {
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
            Core <span className="bg-gradient-to-r from-nx-primary to-nx-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-nx-muted">
            Everything you need to build and grow your digital presence—delivered with expertise and care.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 ${
                visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-300 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-xl border border-nx-border bg-white/5 px-6 py-3 text-sm font-semibold text-nx-fg transition duration-300 hover:bg-white/10"
          >
            <span>Explore Our Services</span>
            <svg
              viewBox="0 0 24 24"
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path fill="currentColor" d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
