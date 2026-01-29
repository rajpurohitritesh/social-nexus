import { useEffect, useRef, useState } from 'react'

export function WhoWeAre() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section ref={ref} className="nx-container py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div
          className={`space-y-4 transition-all duration-700 ${
            visible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Who We <span className="bg-gradient-to-r from-nx-primary to-nx-secondary bg-clip-text text-transparent">Are</span>
          </h2>
          <p className="text-base leading-relaxed text-nx-muted md:text-lg">
            Social Nexus is a digital media & branding agency where creativity meets strategy. We help brands build
            powerful digital presences through thoughtful design, strategic content, and data-driven growth.
          </p>
          <p className="text-base leading-relaxed text-nx-muted">
            Our team combines creative vision with technical expertise to deliver results that matter—backed by the
            innovation and reliability of SGCA Technologies.
          </p>
        </div>

        <div
          className={`nx-card p-6 transition-all duration-700 delay-150 md:p-10 ${
            visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-xl border border-nx-border bg-white/5 px-4 py-2 text-sm font-semibold">
              <span className="size-2 rounded-full bg-nx-success" />
              Powered by SGCA Technologies
            </div>
            <h3 className="text-xl font-extrabold tracking-tight">Built for Modern Brands</h3>
            <p className="text-sm leading-relaxed text-nx-muted">
              We leverage cutting-edge technology and proven methodologies to ensure your brand stands out in a crowded
              digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-1">
                <div className="text-2xl font-black text-nx-primary">100+</div>
                <div className="text-xs text-nx-muted">Brands Served</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-black text-nx-secondary">5+</div>
                <div className="text-xs text-nx-muted">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
