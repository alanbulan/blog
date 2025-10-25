'use client'

import { Calendar, Clock, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: '构建现代化的全栈应用：Next.js 14 最佳实践',
    excerpt: '深入探讨Next.js 14的新特性，包括Server Components、App Router等，分享实战经验与最佳实践。',
    date: '2024-01-15',
    readTime: '8分钟',
    category: '技术',
    tags: ['Next.js', 'React', 'TypeScript'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'UI/UX设计系统搭建指南：从零到一',
    excerpt: '如何构建一套完整的设计系统？本文将分享设计系统的核心要素、组件库搭建和团队协作经验。',
    date: '2024-01-10',
    readTime: '12分钟',
    category: '设计',
    tags: ['Design System', 'UI/UX', 'Figma'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'TypeScript 高级类型技巧与实战应用',
    excerpt: '掌握TypeScript的高级类型系统，提升代码质量和开发效率，附带真实项目案例分析。',
    date: '2024-01-05',
    readTime: '10分钟',
    category: '技术',
    tags: ['TypeScript', '类型系统', '最佳实践'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: '微服务架构实践：从单体到分布式',
    excerpt: '分享微服务架构的设计思路、技术选型和实施经验，包括服务拆分、通信机制和监控运维。',
    date: '2023-12-28',
    readTime: '15分钟',
    category: '架构',
    tags: ['微服务', '架构设计', 'DevOps'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    title: '打造高性能Web应用：性能优化实战',
    excerpt: '从加载速度、运行时性能到用户体验，全方位优化Web应用性能，提升用户满意度。',
    date: '2023-12-20',
    readTime: '11分钟',
    category: '技术',
    tags: ['性能优化', 'Web开发', '用户体验'],
    gradient: 'from-teal-500 to-blue-500',
  },
  {
    id: 6,
    title: '产品思维：技术人员的产品设计思考',
    excerpt: '作为技术人员如何培养产品思维？分享从用户需求到产品落地的完整思考过程。',
    date: '2023-12-15',
    readTime: '9分钟',
    category: '产品',
    tags: ['产品设计', '用户体验', '思维模型'],
    gradient: 'from-pink-500 to-purple-500',
  },
]

const categories = ['全部', '技术', '设计', '架构', '产品']

export default function BlogPage() {
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
                {post.tags.map((tag) => (
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
