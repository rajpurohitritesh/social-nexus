import { BlogGrid } from '../sections/BlogGrid.jsx'

export function Blog() {
  return (
    <section className="nx-container py-16">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-black tracking-tight md:text-5xl">Insights</h1>
        <p className="mt-4 text-base leading-relaxed text-nx-muted">
          Strategy, creative, and growth notes—built for real-world execution.
        </p>
      </div>
      <div className="mt-10">
        <BlogGrid />
      </div>
    </section>
  )
}

