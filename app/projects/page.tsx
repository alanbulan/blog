
import { ExternalLink, Github, Star } from 'lucide-react'
import { getAllProjects } from '@/lib/content'

// 禁用静态生成，每次请求都重新获取数据
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function ProjectsPage() {
  const projects = getAllProjects() as any[]

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
            <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
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
                {project.tags.map((tag: string) => (
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
