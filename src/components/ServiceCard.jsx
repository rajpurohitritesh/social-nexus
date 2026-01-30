export function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="group nx-card h-full p-6 transition-all duration-400 hover:scale-[1.02] hover:border-nx-primary/25 hover:shadow-cardhover active:scale-[0.99] md:p-8">
      <div className="nx-icon-box-hover mb-4">
        {Icon ? <Icon className="size-6 text-nx-primary sm:size-7" aria-hidden /> : null}
      </div>
      <h3 className="mb-2 text-lg font-extrabold tracking-tight">{title}</h3>
      <p className="text-sm leading-relaxed text-nx-muted">{description}</p>
    </div>
  )
}
