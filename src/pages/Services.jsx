import { ServicesList } from '../sections/ServicesList.jsx'

export function Services() {
  return (
    <section className="nx-container py-16">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-black tracking-tight md:text-5xl">
          Services built for{' '}
          <span className="bg-gradient-to-r from-nx-primary via-nx-secondary to-nx-accent bg-clip-text text-transparent">
            modern brands
          </span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-nx-muted">
          Strategy, design, content, and growth—delivered with clean execution and measurable outcomes.
        </p>
      </div>
      <div className="mt-10">
        <ServicesList />
      </div>
    </section>
  )
}

