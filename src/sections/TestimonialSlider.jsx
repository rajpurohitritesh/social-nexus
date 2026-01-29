import { useEffect, useState } from 'react'

const testimonials = [
  {
    quote: 'Social Nexus transformed our brand presence completely. Their creative approach and strategic thinking helped us reach new audiences.',
    author: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    avatar: '👩‍💼',
  },
  {
    quote: 'The team at Social Nexus is professional, creative, and results-driven. Our social media engagement increased by 300% in just 3 months.',
    author: 'Michael Chen',
    role: 'Marketing Director, RetailCo',
    avatar: '👨‍💼',
  },
  {
    quote: 'Working with Social Nexus was a game-changer. They understood our vision and delivered beyond our expectations.',
    author: 'Emily Rodriguez',
    role: 'Founder, Creative Studio',
    avatar: '👩‍🎨',
  },
  {
    quote: 'Their data-driven approach and creative execution helped us achieve our growth targets faster than we imagined.',
    author: 'David Kim',
    role: 'VP Marketing, SaaS Platform',
    avatar: '👨‍💻',
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const current = testimonials[currentIndex]

  return (
    <div className="relative">
      <div className="nx-card p-8 md:p-12">
        <div className="mb-6 text-4xl">"</div>
        <blockquote className="mb-6 text-lg leading-relaxed text-nx-fg md:text-xl">
          {current.quote}
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full border border-nx-border bg-gradient-to-br from-nx-primary/20 via-nx-secondary/15 to-nx-accent/10 text-2xl">
            {current.avatar}
          </div>
          <div>
            <div className="font-extrabold tracking-tight">{current.author}</div>
            <div className="text-sm text-nx-muted">{current.role}</div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-nx-primary' : 'w-2 bg-nx-border hover:bg-nx-muted'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
