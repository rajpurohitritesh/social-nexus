import { ArrowRight } from 'lucide-react'

export function BlogCard({ category, title, excerpt, date }) {
  return (
    <article className="group nx-card h-full p-5 transition-all duration-400 hover:scale-[1.02] hover:border-nx-primary/25 hover:shadow-cardhover active:scale-[0.99] sm:p-6 md:p-8">
      <div className="mb-3 inline-flex items-center gap-2 rounded-xl border border-nx-border bg-white/5 px-3 py-1.5 text-xs font-semibold text-nx-primary">
        {category}
      </div>
      <h3 className="mb-2 text-base font-extrabold tracking-tight transition-colors duration-300 group-hover:text-nx-primary sm:text-lg">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-nx-muted">{excerpt}</p>
      <div className="flex items-center justify-between gap-2">
        <time className="text-xs text-nx-muted">{date}</time>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-nx-primary transition-transform duration-300 group-hover:translate-x-1">
          Read More
          <ArrowRight className="size-3.5 shrink-0" aria-hidden />
        </span>
      </div>
    </article>
  )
}
