
import { Code2, Palette, Database, Cloud, GitBranch, Boxes } from 'lucide-react'
import { getAllSkills } from '@/lib/content'

const iconMap: Record<string, any> = {
  Code2,
  Palette,
  Database,
  Cloud,
  GitBranch,
  Boxes
}

export default function SkillsPage() {
  const skillCategories = getAllSkills().map((skill: any) => ({
    ...skill,
    icon: iconMap[skill.icon] || Code2
  }))

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
