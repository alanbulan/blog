
import { Calendar, Clock, Tag } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/content'

// 禁用静态生成，每次请求都重新获取数据
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function BlogPage() {
  const blogPosts = getAllBlogPosts() as any[]
  const categories = ['全部', ...Array.from(new Set(blogPosts.map((p: any) => p.category)))]

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="section-title">博客文章</h1>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          记录技术探索、设计思考与创意灵感
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              category === '全部'
                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                : 'bg-white/80 backdrop-blur-sm text-neutral-700 hover:bg-primary-50 border border-neutral-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <article
            key={post.id}
            className="glass-effect rounded-2xl overflow-hidden card-hover group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                <span className="text-xs font-medium text-neutral-700">{post.category}</span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h2 className="text-xl font-bold text-neutral-800 group-hover:text-primary-600 transition-colors line-clamp-2">
                {post.title}
              </h2>

              <p className="text-neutral-600 text-sm line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-neutral-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
