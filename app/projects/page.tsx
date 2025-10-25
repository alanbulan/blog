'use client'

import { ExternalLink, Github, Star } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'AI智能任务管理系统',
    description: '基于人工智能的智能任务分配与优先级管理平台，支持自然语言交互、智能推荐和团队协作。采用Next.js 14、TypeScript、TailwindCSS构建，集成OpenAI API实现智能功能。',
    image: 'from-blue-500 via-cyan-500 to-teal-500',
    tags: ['Next.js', 'TypeScript', 'AI', 'OpenAI'],
    github: 'https://github.com/alanbulan/ai-task-manager',
    demo: 'https://ai-task-manager.demo',
    stars: 1250,
  },
  {
    id: 2,
    title: 'Design System Pro',
    description: '企业级设计系统解决方案，包含200+精心设计的组件、完整的设计规范和丰富的交互动效。支持主题定制、深色模式、响应式设计，已在多个大型项目中应用。',
    image: 'from-purple-500 via-pink-500 to-rose-500',
    tags: ['React', 'Design System', 'Storybook', 'Figma'],
    github: 'https://github.com/alanbulan/design-system-pro',
    demo: 'https://design-system-pro.demo',
    stars: 890,
  },
  {
    id: 3,
    title: '全栈电商平台',
    description: '功能完整的现代化电商解决方案，包含商品管理、订单系统、支付集成、用户中心等核心功能。采用微服务架构，支持高并发、高可用，性能优异。',
    image: 'from-orange-500 via-red-500 to-pink-500',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/alanbulan/fullstack-ecommerce',
    demo: 'https://ecommerce.demo',
    stars: 2100,
  },
  {
    id: 4,
    title: '实时协作白板',
    description: '支持多人实时协作的在线白板应用，提供丰富的绘图工具、图形库和模板。采用WebSocket实现实时同步，支持无限画布、版本历史和团队管理。',
    image: 'from-green-500 via-emerald-500 to-teal-500',
    tags: ['React', 'WebSocket', 'Canvas', 'Real-time'],
    github: 'https://github.com/alanbulan/collab-whiteboard',
    demo: 'https://whiteboard.demo',
    stars: 670,
  },
  {
    id: 5,
    title: '开发者工具箱',
    description: '为开发者打造的实用工具集合，包含代码格式化、JSON处理、加解密、图片压缩等50+常用工具。界面简洁美观，所有计算本地完成，保护隐私安全。',
    image: 'from-indigo-500 via-purple-500 to-pink-500',
    tags: ['Vue.js', 'TypeScript', 'PWA', 'Web APIs'],
    github: 'https://github.com/alanbulan/dev-toolbox',
    demo: 'https://dev-toolbox.demo',
    stars: 1560,
  },
  {
    id: 6,
    title: '个人知识管理系统',
    description: '强大的知识管理和笔记系统，支持Markdown编辑、双向链接、标签分类和全文搜索。采用本地优先策略，数据完全由用户掌控，支持多端同步。',
    image: 'from-yellow-500 via-orange-500 to-red-500',
    tags: ['Electron', 'React', 'SQLite', 'Markdown'],
    github: 'https://github.com/alanbulan/knowledge-base',
    demo: 'https://knowledge-base.demo',
    stars: 980,
  },
]

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="section-title">项目展示</h1>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          精选作品集，展现全栈开发与产品设计能力
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="glass-effect rounded-2xl overflow-hidden card-hover group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project Image/Gradient */}
            <div className={`h-64 bg-gradient-to-br ${project.image} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium text-neutral-700">{project.stars}</span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-neutral-800 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h2>

              <p className="text-neutral-600 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg hover:shadow-lg transition-shadow"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="font-medium">在线演示</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
