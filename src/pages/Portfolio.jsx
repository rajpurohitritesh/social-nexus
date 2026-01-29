import { PortfolioGrid } from '../sections/PortfolioGrid.jsx'

export function Portfolio() {
  return (
    <section className="nx-container py-16">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-black tracking-tight md:text-5xl">Portfolio</h1>
        <p className="mt-4 text-base leading-relaxed text-nx-muted">
          A selection of work across branding, social media, websites, and influencer campaigns.
        </p>
      </div>
      <div className="mt-10">
        <PortfolioGrid />
      </div>
    </section>
  )
}

