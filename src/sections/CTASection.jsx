import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CTASection() {
  return (
    <section className="nx-container py-12 sm:py-16 md:py-24">
      <div className="group nx-card relative overflow-hidden border-2 border-nx-primary/30 bg-gradient-to-br from-nx-primary/10 via-nx-secondary/5 to-nx-accent/10 p-6 transition-all duration-400 hover:border-nx-primary/50 hover:shadow-glow-lg sm:p-8 md:p-12">
        <div className="absolute -right-32 -top-32 size-96 rounded-full bg-gradient-to-br from-nx-primary/20 to-nx-secondary/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
        <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-gradient-to-br from-nx-accent/20 to-nx-primary/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

        <div className="relative z-10 text-center">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Ready to Build a Powerful{' '}
            <span className="bg-gradient-to-r from-nx-primary via-nx-secondary to-nx-accent bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-nx-muted sm:mt-4 sm:text-base md:text-lg">
            Let's turn your vision into a brand that stands out, engages audiences, and drives real results.
          </p>
          <div className="mt-6 sm:mt-8">
            <Link
              to="/contact"
              className="group/btn inline-flex min-h-[48px] items-center gap-2 nx-btn-primary px-6 py-3.5 text-base md:text-lg"
            >
              <Sparkles className="size-5 shrink-0 transition-transform duration-300 group-hover/btn:rotate-12" aria-hidden />
              <span>Let's Build Your Brand</span>
              <ArrowRight className="size-5 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
