import { UserCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    quote: 'Social Nexus transformed our brand presence completely. Their creative approach and strategic thinking helped us reach new audiences.',
    author: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
  },
  {
    quote: 'The team at Social Nexus is professional, creative, and results-driven. Our social media engagement increased by 300% in just 3 months.',
    author: 'Michael Chen',
    role: 'Marketing Director, RetailCo',
  },
  {
    quote: 'Working with Social Nexus was a game-changer. They understood our vision and delivered beyond our expectations.',
    author: 'Emily Rodriguez',
    role: 'Founder, Creative Studio',
  },
  {
    quote: 'Their data-driven approach and creative execution helped us achieve our growth targets faster than we imagined.',
    author: 'David Kim',
    role: 'VP Marketing, SaaS Platform',
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
      <div className="nx-card p-6 transition-all duration-400 hover:shadow-cardhover sm:p-8 md:p-12">
        <div className="mb-4 text-4xl font-serif text-nx-primary/60">"</div>
        <blockquote className="mb-6 text-base leading-relaxed text-nx-fg sm:text-lg md:text-xl">
          {current.quote}
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="nx-icon-box size-12 rounded-full">
            <UserCircle className="size-7 text-nx-primary" aria-hidden />
          </div>
          <div>
            <div className="font-extrabold tracking-tight">{current.author}</div>
            <div className="text-sm text-nx-muted">{current.role}</div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-1">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center touch-manipulation"
            aria-label={`Go to testimonial ${index + 1}`}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                index === currentIndex ? 'h-2 w-8 bg-nx-primary' : 'h-2 w-2 bg-nx-border hover:bg-nx-muted'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
