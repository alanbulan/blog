import Link from 'next/link'
import { ArrowRight, Sparkles, Code2, Database, Palette, Lightbulb, GitBranch, Cloud, Boxes } from 'lucide-react'
import { getHomepage, getAllSkills, getAllProjects } from '@/lib/content'

// 禁用静态生成，每次请求都重新获取数据
export const dynamic = 'force-dynamic'
export const revalidate = 0

const iconMap: Record<string, any> = {
  Code2,
  Database,
  Palette,
  Lightbulb,
  GitBranch,
  Cloud,
  Boxes
}

export default function Home() {
  const homepage = getHomepage()
  const allSkills = getAllSkills()
  const allProjects = getAllProjects() as any[]
  
  // 首页显示前4个技能
  const skills = allSkills.slice(0, 4).map((skill: any) => ({
    ...skill,
    icon: iconMap[skill.icon] || Code2,
    description: skill.skills?.slice(0, 3).map((s: any) => s.name).join(' · ') || '精通多项技能'
  }))
  
  // 首页显示前3个项目
  const featuredProjects = allProjects.slice(0, 3)
  
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-primary-200 mb-4">
            <span className="text-sm text-primary-600 font-medium">{homepage.welcome}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">{homepage.title}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            {homepage.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/projects" className="btn-primary flex items-center gap-2">
              查看项目
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/about" className="btn-outline">
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-12">
        <h2 className="section-title text-center">全能领域</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.title}
                className="glass-effect rounded-2xl p-8 card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                  <Icon className="w-8 h-8 text-white drop-shadow-lg" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-2">{skill.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{skill.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">精选项目</h2>
          <Link href="/projects" className="text-primary-600 hover:text-primary-700 flex items-center gap-2 font-medium">
            查看全部
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="glass-effect rounded-2xl overflow-hidden card-hover group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                <Sparkles className="w-16 h-16 text-white/80 group-hover:scale-125 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-2">{project.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="glass-effect rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {homepage.ctaText}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
              {homepage.ctaSecondary}
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              联系我
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
