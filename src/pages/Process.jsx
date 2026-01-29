import { ProcessTimeline } from '../sections/ProcessTimeline.jsx'

export function Process() {
  return (
    <section className="nx-container py-16">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-black tracking-tight md:text-5xl">How we work</h1>
        <p className="mt-4 text-base leading-relaxed text-nx-muted">
          A clear, collaborative workflow designed to move fast without losing quality.
        </p>
      </div>
      <div className="mt-10">
        <ProcessTimeline />
      </div>
    </section>
  )
}

