import {
  ArrowRight,
  Film,
  Monitor,
  Palette,
  Smartphone,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ServiceCard } from '../components/ServiceCard.jsx'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity & Design',
    description: 'Visual identity systems, logos, brand guidelines, and design assets that make your brand memorable.',
  },
  {
    icon: Smartphone,
    title: 'Social Media Management',
    description: 'Strategic content planning, community management, and engagement that grows your audience.',
  },
  {
    icon: Sparkles,
    title: 'Influencer Marketing',
    description: 'Authentic partnerships and campaigns that connect your brand with the right audiences.',
  },
  {
    icon: Monitor,
    title: 'Website Design & Development',
    description: 'Modern, fast, conversion-focused websites built with clean code and beautiful design.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing & Growth',
    description: 'Data-driven campaigns across channels that drive real results and measurable ROI.',
  },
  {
    icon: Film,
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
    <section ref={ref} className="border-y border-nx-border bg-nx-card/30 py-12 sm:py-16 md:py-24">
      <div className="nx-container">
        <div
          className={`mb-10 text-center transition-all duration-700 sm:mb-12 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
            Core <span className="bg-gradient-to-r from-nx-primary to-nx-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-nx-muted sm:mt-4 sm:text-base">
            Everything you need to build and grow your digital presence—delivered with expertise and care.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div
          className={`mt-10 text-center transition-all duration-700 delay-300 sm:mt-12 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <Link
            to="/services"
            className="group inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-nx-border bg-white/5 px-5 py-3 text-sm font-semibold text-nx-fg transition-all duration-300 hover:border-nx-primary/30 hover:bg-white/10 hover:shadow-glow"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
