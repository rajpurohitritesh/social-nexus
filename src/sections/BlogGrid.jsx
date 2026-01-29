import { BlogCard } from '../components/BlogCard.jsx'

const blogPosts = [
  {
    category: 'Branding',
    title: '5 Essential Elements of a Strong Brand Identity',
    excerpt: 'Learn what makes a brand identity memorable and effective in today\'s digital landscape.',
    date: 'Jan 15, 2026',
  },
  {
    category: 'Social Media',
    title: 'Social Media Strategy for 2026',
    excerpt: 'Trends, tactics, and tools to grow your social media presence this year.',
    date: 'Jan 10, 2026',
  },
  {
    category: 'Marketing',
    title: 'Data-Driven Marketing: A Complete Guide',
    excerpt: 'How to use analytics and insights to optimize your marketing campaigns.',
    date: 'Jan 5, 2026',
  },
  {
    category: 'Websites',
    title: 'Building Conversion-Focused Websites',
    excerpt: 'Design and development principles that turn visitors into customers.',
    date: 'Dec 28, 2025',
  },
  {
    category: 'Branding',
    title: 'The Psychology of Color in Branding',
    excerpt: 'Understanding how color choices impact brand perception and customer behavior.',
    date: 'Dec 20, 2025',
  },
  {
    category: 'Social Media',
    title: 'Influencer Marketing Best Practices',
    excerpt: 'How to build authentic partnerships that drive real results.',
    date: 'Dec 15, 2025',
  },
]

export function BlogGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post) => (
        <BlogCard key={post.title} {...post} />
      ))}
    </div>
  )
}
