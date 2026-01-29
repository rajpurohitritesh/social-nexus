import { ContactSection } from '../sections/ContactSection.jsx'

export function Contact() {
  return (
    <section className="nx-container py-16">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-black tracking-tight md:text-5xl">Contact</h1>
        <p className="mt-4 text-base leading-relaxed text-nx-muted">
          Tell us what you’re building—our team will respond quickly with next steps.
        </p>
      </div>
      <div className="mt-10">
        <ContactSection />
      </div>
    </section>
  )
}

