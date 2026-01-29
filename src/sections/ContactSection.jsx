import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send to an API
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Contact Form */}
      <div className="nx-card p-6 md:p-8">
        <h2 className="mb-6 text-2xl font-extrabold tracking-tight">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-nx-border bg-white/5 px-4 py-3 text-nx-fg placeholder:text-nx-muted focus:border-nx-primary focus:outline-none focus:ring-2 focus:ring-nx-primary/20"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-nx-border bg-white/5 px-4 py-3 text-nx-fg placeholder:text-nx-muted focus:border-nx-primary focus:outline-none focus:ring-2 focus:ring-nx-primary/20"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="company" className="mb-2 block text-sm font-semibold">
              Company (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-xl border border-nx-border bg-white/5 px-4 py-3 text-nx-fg placeholder:text-nx-muted focus:border-nx-primary focus:outline-none focus:ring-2 focus:ring-nx-primary/20"
              placeholder="Your company"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-xl border border-nx-border bg-white/5 px-4 py-3 text-nx-fg placeholder:text-nx-muted focus:border-nx-primary focus:outline-none focus:ring-2 focus:ring-nx-primary/20"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className={`w-full nx-btn-primary transition-all duration-300 ${
              submitted ? 'bg-nx-success' : ''
            }`}
          >
            {submitted ? '✓ Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        <div className="nx-card p-6 md:p-8">
          <h2 className="mb-6 text-2xl font-extrabold tracking-tight">Contact Details</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex size-12 items-center justify-center rounded-xl border border-nx-border bg-gradient-to-br from-nx-primary/20 via-nx-secondary/15 to-nx-accent/10">
                📧
              </div>
              <div>
                <div className="text-sm font-semibold">Email</div>
                <a href="mailto:hello@socialnexus.com" className="nx-link text-sm">
                  hello@socialnexus.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex size-12 items-center justify-center rounded-xl border border-nx-border bg-gradient-to-br from-nx-primary/20 via-nx-secondary/15 to-nx-accent/10">
                📞
              </div>
              <div>
                <div className="text-sm font-semibold">Phone</div>
                <a href="tel:+1234567890" className="nx-link text-sm">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex size-12 items-center justify-center rounded-xl border border-nx-border bg-gradient-to-br from-nx-primary/20 via-nx-secondary/15 to-nx-accent/10">
                📍
              </div>
              <div>
                <div className="text-sm font-semibold">Location</div>
                <div className="text-sm text-nx-muted">Available Worldwide</div>
              </div>
            </div>
          </div>
        </div>

        <div className="nx-card border-2 border-nx-primary/30 bg-gradient-to-br from-nx-primary/10 via-nx-secondary/5 to-nx-accent/10 p-6 md:p-8">
          <h3 className="mb-2 text-lg font-extrabold tracking-tight">Response Time</h3>
          <p className="text-sm leading-relaxed text-nx-muted">
            We typically respond within 24 hours. For urgent inquiries, please call us directly.
          </p>
        </div>
      </div>
    </div>
  )
}
