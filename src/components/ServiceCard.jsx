export function ServiceCard({ icon, title, description }) {
  return (
    <div className="group nx-card h-full p-6 transition-all duration-300 hover:scale-[1.02] hover:border-nx-primary/30 hover:shadow-glow md:p-8">
      <div className="mb-4 inline-flex size-14 items-center justify-center rounded-xl border border-nx-border bg-gradient-to-br from-nx-primary/20 via-nx-secondary/15 to-nx-accent/10 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-extrabold tracking-tight">{title}</h3>
      <p className="text-sm leading-relaxed text-nx-muted">{description}</p>
    </div>
  )
}
