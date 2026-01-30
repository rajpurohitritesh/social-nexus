import {
  Dumbbell,
  Film,
  Monitor,
  Palette,
  Shirt,
  Smartphone,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react'
import { useState } from 'react'

const categories = ['All', 'Branding', 'Social Media', 'Websites', 'Influencer Campaigns']

const iconByCategory = {
  Branding: Palette,
  'Social Media': Smartphone,
  Websites: Monitor,
  'Influencer Campaigns': Sparkles,
}

const portfolioItems = [
  { category: 'Branding', title: 'Modern Tech Startup', description: 'Complete brand identity for a SaaS platform' },
  { category: 'Social Media', title: 'E-commerce Growth', description: 'Social media strategy that increased engagement by 300%' },
  { category: 'Websites', title: 'Corporate Website Redesign', description: 'Fast, modern website with improved conversions' },
  { category: 'Influencer Campaigns', title: 'Product Launch Campaign', description: 'Multi-platform influencer collaboration' },
  { category: 'Branding', title: 'Restaurant Brand Identity', description: 'Vibrant visual identity for a new restaurant chain', Icon: UtensilsCrossed },
  { category: 'Social Media', title: 'Fitness Brand Content', description: 'Consistent content strategy across platforms', Icon: Dumbbell },
  { category: 'Websites', title: 'Portfolio Website', description: 'Creative portfolio for a design agency', Icon: Film },
  { category: 'Influencer Campaigns', title: 'Fashion Collaboration', description: 'Strategic partnerships with fashion influencers', Icon: Shirt },
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`min-h-[44px] rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300 touch-manipulation ${
              activeCategory === category
                ? 'border-nx-primary bg-nx-primary/20 text-nx-fg shadow-glow'
                : 'border-nx-border bg-white/5 text-nx-fg/70 hover:border-nx-primary/30 hover:bg-white/10 hover:text-nx-fg'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => {
          const Icon = item.Icon || iconByCategory[item.category] || Palette
          return (
            <div
              key={`${item.category}-${item.title}`}
              className="group nx-card overflow-hidden p-0 transition-all duration-400 hover:scale-[1.02] hover:border-nx-primary/30 hover:shadow-cardhover active:scale-[0.99]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-nx-primary/20 via-nx-secondary/15 to-nx-accent/10">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-400 group-hover:scale-110">
                  <div className="nx-icon-box size-16 sm:size-20">
                    <Icon className="size-8 text-nx-primary sm:size-10" aria-hidden />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-nx-bg/95 via-nx-bg/40 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-400 group-hover:translate-y-0 sm:p-6">
                  <div className="text-xs font-semibold text-nx-primary">{item.category}</div>
                  <h3 className="mt-1 text-base font-extrabold tracking-tight sm:text-lg">{item.title}</h3>
                  <p className="mt-1 text-sm text-nx-muted">{item.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
