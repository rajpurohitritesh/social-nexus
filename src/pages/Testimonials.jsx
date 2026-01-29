import { TestimonialSlider } from '../sections/TestimonialSlider.jsx'

export function Testimonials() {
  return (
    <section className="nx-container py-16">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-black tracking-tight md:text-5xl">Testimonials</h1>
        <p className="mt-4 text-base leading-relaxed text-nx-muted">
          Trust-focused stories from brands we’ve helped grow.
        </p>
      </div>
      <div className="mt-10">
        <TestimonialSlider />
      </div>
    </section>
  )
}

