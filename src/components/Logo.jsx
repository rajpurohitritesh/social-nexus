export function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative grid size-9 place-items-center rounded-xl bg-white/5 ring-1 ring-nx-border">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-nx-primary/40 via-nx-secondary/30 to-nx-accent/35 blur-[10px]" />
        <span className="relative text-sm font-black tracking-tight">SN</span>
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-extrabold tracking-tight">Social Nexus</span>
        <span className="block text-[11px] text-nx-muted">
          Powered by <span className="text-nx-fg/80">SGCA Technologies</span>
        </span>
      </span>
    </span>
  )
}

