import { useState } from 'react'
import { ServiceCard } from '../components/ServiceCard.jsx'

const services = [
  {
    icon: '🎨',
    title: 'Brand Identity & Design',
    description: 'Visual identity systems, logos, brand guidelines, and design assets that make your brand memorable.',
    details: 'We create cohesive visual identities that resonate with your audience and stand the test of time. From logo design to comprehensive brand guidelines, we ensure consistency across all touchpoints.',
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    description: 'Strategic content planning, community management, and engagement that grows your audience.',
    details: 'Our team handles everything from content strategy and creation to community engagement and analytics. We keep your brand active, authentic, and growing across all platforms.',
  },
  {
    icon: '🌟',
    title: 'Influencer Marketing',
    description: 'Authentic partnerships and campaigns that connect your brand with the right audiences.',
    details: 'We identify and partner with influencers who align with your brand values, creating authentic campaigns that drive engagement and conversions.',
  },
  {
    icon: '💻',
    title: 'Website Design & Development',
    description: 'Modern, fast, conversion-focused websites built with clean code and beautiful design.',
    details: 'Every website we build is optimized for speed, SEO, and conversions. We combine beautiful design with technical excellence to create digital experiences that perform.',
  },
  {
    icon: '📈',
    title: 'Digital Marketing & Growth',
    description: 'Data-driven campaigns across channels that drive real results and measurable ROI.',
    details: 'From SEO and PPC to email marketing and retargeting, we use data to optimize every campaign for maximum impact and ROI.',
  },
  {
    icon: '🎬',
    title: 'Content Creation & Media Production',
    description: 'High-quality video, photography, and multimedia content that tells your brand story.',
    details: 'Our creative team produces professional video, photography, and multimedia content that captures attention and tells your brand story effectively.',
  },
]

export function ServicesList() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service) => (
        <div
          key={service.title}
          className={`group nx-card overflow-hidden transition-all duration-300 ${
            expanded === service.title ? 'border-nx-primary/50 shadow-glow' : ''
          }`}
        >
          <div className="p-6 md:p-8">
            <div className="mb-4 inline-flex size-14 items-center justify-center rounded-xl border border-nx-border bg-gradient-to-br from-nx-primary/20 via-nx-secondary/15 to-nx-accent/10 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              {service.icon}
            </div>
            <h3 className="mb-2 text-xl font-extrabold tracking-tight">{service.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-nx-muted">{service.description}</p>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                expanded === service.title ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="mb-4 text-sm leading-relaxed text-nx-muted">{service.details}</p>
            </div>
            <button
              type="button"
              onClick={() => setExpanded(expanded === service.title ? null : service.title)}
              className="text-sm font-semibold text-nx-primary transition-colors duration-300 hover:text-nx-secondary"
            >
              {expanded === service.title ? 'Show Less' : 'Learn More'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
