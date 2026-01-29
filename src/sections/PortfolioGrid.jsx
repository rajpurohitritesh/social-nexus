import { useState } from 'react'
import { BlogCard } from '../components/BlogCard.jsx'

const categories = ['All', 'Branding', 'Social Media', 'Websites', 'Influencer Campaigns']

const portfolioItems = [
  {
    category: 'Branding',
    title: 'Modern Tech Startup',
    description: 'Complete brand identity for a SaaS platform',
    image: '🎨',
  },
  {
    category: 'Social Media',
    title: 'E-commerce Growth',
    description: 'Social media strategy that increased engagement by 300%',
    image: '📱',
  },
  {
    category: 'Websites',
    title: 'Corporate Website Redesign',
    description: 'Fast, modern website with improved conversions',
    image: '💻',
  },
  {
    category: 'Influencer Campaigns',
    title: 'Product Launch Campaign',
    description: 'Multi-platform influencer collaboration',
    image: '🌟',
  },
  {
    category: 'Branding',
    title: 'Restaurant Brand Identity',
    description: 'Vibrant visual identity for a new restaurant chain',
    image: '🍽️',
  },
  {
    category: 'Social Media',
    title: 'Fitness Brand Content',
    description: 'Consistent content strategy across platforms',
    image: '💪',
  },
  {
    category: 'Websites',
    title: 'Portfolio Website',
    description: 'Creative portfolio for a design agency',
    image: '🎭',
  },
  {
    category: 'Influencer Campaigns',
    title: 'Fashion Collaboration',
    description: 'Strategic partnerships with fashion influencers',
    image: '👗',
  },
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div className="space-y-8">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              activeCategory === category
                ? 'border-nx-primary bg-nx-primary/20 text-nx-fg shadow-glow'
                : 'border-nx-border bg-white/5 text-nx-fg/70 hover:bg-white/10 hover:text-nx-fg'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={`${item.category}-${item.title}`}
            className="group nx-card overflow-hidden p-0 transition-all duration-300 hover:scale-[1.02] hover:border-nx-primary/30 hover:shadow-glow"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-nx-primary/20 via-nx-secondary/15 to-nx-accent/10">
              <div className="absolute inset-0 flex items-center justify-center text-6xl transition-transform duration-300 group-hover:scale-110">
                {item.image}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-nx-bg/90 via-nx-bg/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-300 group-hover:translate-y-0">
                <div className="text-xs font-semibold text-nx-primary">{item.category}</div>
                <h3 className="mt-1 text-lg font-extrabold tracking-tight">{item.title}</h3>
                <p className="mt-1 text-sm text-nx-muted">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
