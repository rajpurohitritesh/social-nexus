import { Check, Mail, MapPin, Phone } from 'lucide-react'
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
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const inputClass =
    'w-full rounded-xl border border-nx-border bg-white/5 px-4 py-3 text-nx-fg placeholder:text-nx-muted transition-colors duration-300 focus:border-nx-primary focus:outline-none focus:ring-2 focus:ring-nx-primary/20 min-h-[48px]'

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
      <div className="nx-card p-5 sm:p-6 md:p-8">
        <h2 className="mb-5 text-xl font-extrabold tracking-tight sm:mb-6 sm:text-2xl">Get in Touch</h2>
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
              className={inputClass}
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
              className={inputClass}
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
              className={inputClass}
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
              className={`${inputClass} min-h-[120px] resize-y py-3`}
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className={`w-full nx-btn-primary min-h-[48px] transition-all duration-400 ${
              submitted ? 'scale-[0.98] bg-nx-success' : ''
            }`}
          >
            {submitted ? (
              <>
                <Check className="size-5 shrink-0" aria-hidden />
                Message Sent!
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div className="nx-card p-5 sm:p-6 md:p-8">
          <h2 className="mb-5 text-xl font-extrabold tracking-tight sm:mb-6 sm:text-2xl">Contact Details</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="nx-icon-box">
                <Mail className="size-6 text-nx-primary" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold">Email</div>
                <a href="mailto:hello@socialnexus.com" className="nx-link text-sm break-all">
                  hello@socialnexus.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="nx-icon-box">
                <Phone className="size-6 text-nx-primary" aria-hidden />
              </div>
              <div>
                <div className="text-sm font-semibold">Phone</div>
                <a href="tel:+1234567890" className="nx-link text-sm">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="nx-icon-box">
                <MapPin className="size-6 text-nx-primary" aria-hidden />
              </div>
              <div>
                <div className="text-sm font-semibold">Location</div>
                <div className="text-sm text-nx-muted">Available Worldwide</div>
              </div>
            </div>
          </div>
        </div>

        <div className="nx-card border-2 border-nx-primary/30 bg-gradient-to-br from-nx-primary/10 via-nx-secondary/5 to-nx-accent/10 p-5 sm:p-6 md:p-8 transition-all duration-400 hover:shadow-glow">
          <h3 className="mb-2 text-lg font-extrabold tracking-tight">Response Time</h3>
          <p className="text-sm leading-relaxed text-nx-muted">
            We typically respond within 24 hours. For urgent inquiries, please call us directly.
          </p>
        </div>
      </div>
    </div>
  )
}
