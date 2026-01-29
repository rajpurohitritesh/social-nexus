export function BlogCard({ category, title, excerpt, date }) {
  return (
    <article className="group nx-card h-full p-6 transition-all duration-300 hover:scale-[1.02] hover:border-nx-primary/30 hover:shadow-glow md:p-8">
      <div className="mb-3 inline-flex items-center gap-2 rounded-xl border border-nx-border bg-white/5 px-3 py-1 text-xs font-semibold text-nx-primary">
        {category}
      </div>
      <h3 className="mb-2 text-lg font-extrabold tracking-tight transition-colors duration-300 group-hover:text-nx-primary">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-nx-muted">{excerpt}</p>
      <div className="flex items-center justify-between">
        <time className="text-xs text-nx-muted">{date}</time>
        <span className="text-xs font-semibold text-nx-primary transition-transform duration-300 group-hover:translate-x-1">
          Read More →
        </span>
      </div>
    </article>
  )
}
