import {
  Film,
  Monitor,
  Palette,
  Smartphone,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { useState } from 'react'
import { ServiceCard } from '../components/ServiceCard.jsx'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity & Design',
    description: 'Visual identity systems, logos, brand guidelines, and design assets that make your brand memorable.',
    details: 'We create cohesive visual identities that resonate with your audience and stand the test of time. From logo design to comprehensive brand guidelines, we ensure consistency across all touchpoints.',
  },
  {
    icon: Smartphone,
    title: 'Social Media Management',
    description: 'Strategic content planning, community management, and engagement that grows your audience.',
    details: 'Our team handles everything from content strategy and creation to community engagement and analytics. We keep your brand active, authentic, and growing across all platforms.',
  },
  {
    icon: Sparkles,
    title: 'Influencer Marketing',
    description: 'Authentic partnerships and campaigns that connect your brand with the right audiences.',
    details: 'We identify and partner with influencers who align with your brand values, creating authentic campaigns that drive engagement and conversions.',
  },
  {
    icon: Monitor,
    title: 'Website Design & Development',
    description: 'Modern, fast, conversion-focused websites built with clean code and beautiful design.',
    details: 'Every website we build is optimized for speed, SEO, and conversions. We combine beautiful design with technical excellence to create digital experiences that perform.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing & Growth',
    description: 'Data-driven campaigns across channels that drive real results and measurable ROI.',
    details: 'From SEO and PPC to email marketing and retargeting, we use data to optimize every campaign for maximum impact and ROI.',
  },
  {
    icon: Film,
    title: 'Content Creation & Media Production',
    description: 'High-quality video, photography, and multimedia content that tells your brand story.',
    details: 'Our creative team produces professional video, photography, and multimedia content that captures attention and tells your brand story effectively.',
  },
]

export function ServicesList() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
      {services.map((service) => {
        const Icon = service.icon
        const isExpanded = expanded === service.title
        return (
          <div
            key={service.title}
            className={`group nx-card overflow-hidden transition-all duration-400 ${
              isExpanded ? 'border-nx-primary/50 shadow-cardhover' : 'hover:border-nx-primary/25'
            }`}
          >
            <div className="p-5 sm:p-6 md:p-8">
              <div className="nx-icon-box-hover mb-4">
                <Icon className="size-6 text-nx-primary sm:size-7" aria-hidden />
              </div>
              <h3 className="mb-2 text-lg font-extrabold tracking-tight sm:text-xl">{service.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-nx-muted">{service.description}</p>
              <div
                className={`grid transition-all duration-400 ease-out ${
                  isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="mb-4 text-sm leading-relaxed text-nx-muted">{service.details}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setExpanded(isExpanded ? null : service.title)}
                className="min-h-[44px] min-w-[44px] text-sm font-semibold text-nx-primary transition-colors duration-300 hover:text-nx-secondary touch-manipulation"
              >
                {isExpanded ? 'Show Less' : 'Learn More'}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
