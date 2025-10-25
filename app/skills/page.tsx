'use client'

import { Code2, Palette, Database, Cloud, GitBranch, Boxes } from 'lucide-react'

const skillCategories = [
  {
    title: '前端开发',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Vue.js', level: 88 },
      { name: 'TailwindCSS', level: 95 },
      { name: 'HTML/CSS', level: 98 },
      { name: 'JavaScript', level: 96 },
    ],
  },
  {
    title: '后端开发',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 86 },
      { name: 'Redis', level: 82 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    title: 'UI/UX 设计',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Figma', level: 93 },
      { name: 'Adobe XD', level: 88 },
      { name: 'Design System', level: 90 },
      { name: 'Prototyping', level: 92 },
      { name: 'User Research', level: 85 },
      { name: 'Interaction Design', level: 89 },
    ],
  },
  {
    title: '云服务 & DevOps',
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'AWS', level: 82 },
      { name: 'Cloudflare', level: 88 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 83 },
      { name: 'Nginx', level: 80 },
      { name: 'Linux', level: 84 },
    ],
  },
  {
    title: '版本控制',
    icon: GitBranch,
    color: 'from-teal-500 to-blue-500',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'GitHub Actions', level: 88 },
      { name: 'GitLab CI', level: 82 },
    ],
  },
  {
    title: '其他技能',
    icon: Boxes,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: '微服务架构', level: 85 },
      { name: '性能优化', level: 90 },
      { name: '单元测试', level: 86 },
      { name: '敏捷开发', level: 88 },
      { name: '技术写作', level: 92 },
      { name: '团队协作', level: 94 },
    ],
  },
]

export default function SkillsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="section-title">技能树</h1>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          全栈开发 · 产品设计 · 持续学习
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon
          return (
            <div
              key={category.title}
              className="glass-effect rounded-2xl p-8 space-y-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-800">{category.title}</h2>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-neutral-700">{skill.name}</span>
                      <span className="text-sm text-neutral-500 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Additional Info */}
      <div className="glass-effect rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4 gradient-text">持续学习中</h3>
        <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          技术在不断进步，我也在持续学习新技术、新工具和新方法。
          目前正在深入学习 AI 应用开发、Web3 技术和系统架构设计。
        </p>
      </div>
    </div>
  )
}
