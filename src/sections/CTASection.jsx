import { Link } from 'react-router-dom'

export function CTASection() {
  return (
    <section className="nx-container py-16 md:py-24">
      <div className="nx-card relative overflow-hidden border-2 border-nx-primary/30 bg-gradient-to-br from-nx-primary/10 via-nx-secondary/5 to-nx-accent/10 p-8 md:p-12">
        {/* Background gradient effect */}
        <div className="absolute -right-32 -top-32 size-96 rounded-full bg-gradient-to-br from-nx-primary/20 to-nx-secondary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-gradient-to-br from-nx-accent/20 to-nx-primary/20 blur-3xl" />

        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
            Ready to Build a Powerful{' '}
            <span className="bg-gradient-to-r from-nx-primary via-nx-secondary to-nx-accent bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-nx-muted md:text-lg">
            Let's turn your vision into a brand that stands out, engages audiences, and drives real results.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 nx-btn-primary text-base md:text-lg"
            >
              <span>👉</span>
              <span>Let's Build Your Brand</span>
              <svg
                viewBox="0 0 24 24"
                className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path fill="currentColor" d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
