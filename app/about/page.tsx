import { Code, Palette, Rocket, Users, Heart, Coffee, Music, Camera, Book, Plane } from 'lucide-react'
import { getAbout, getProfile } from '@/lib/content'

// 禁用静态生成，每次请求都重新获取数据
export const dynamic = 'force-dynamic'
export const revalidate = 0

const iconMap: Record<string, any> = {
  Code,
  Palette,
  Book,
  Rocket,
  Coffee,
  Heart,
}

export default function AboutPage() {
  const about = getAbout()
  const profile = getProfile()
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-6 animate-fade-in">
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center shadow-2xl">
          <span className="text-white text-5xl font-bold">AL</span>
        </div>
        <h1 className="section-title">关于我</h1>
        <p className="text-xl text-neutral-600 leading-relaxed">
          你好，我是<span className="font-bold gradient-text">{profile.name}</span>（{profile.englishName}）
          <br />
          {profile.bio}
        </p>
      </div>

      {/* Introduction */}
      <div className="glass-effect rounded-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-neutral-800 mb-4">我的故事</h2>
        <div className="space-y-4 text-neutral-600 leading-relaxed">
          <p>{about.story1}</p>
          <p>{about.story2}</p>
          <p>{about.story3}</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-neutral-800 text-center">成长轨迹</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-600 to-accent-600"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {about.timeline.map((item: any, index: number) => (
              <div
                key={item.year}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="glass-effect rounded-xl p-6 inline-block">
                    <div className="text-2xl font-bold gradient-text mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">{item.title}</h3>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-neutral-800 text-center">兴趣爱好</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {about.interests.map((interest: any, index: number) => {
            const Icon = iconMap[interest.icon]
            if (!Icon) return null
            return (
              <div
                key={interest.title}
                className="glass-effect rounded-xl p-6 text-center card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${interest.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-neutral-800">{interest.title}</h3>
              </div>
            )
          })}
        </div>
      </div>

      {/* Quote */}
      <div className="glass-effect rounded-2xl p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10"></div>
        <div className="relative z-10">
          <p className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4 whitespace-pre-line">
            "{profile.motto}"
          </p>
          <p className="text-neutral-600">— 我的座右铭</p>
        </div>
      </div>
    </div>
  )
}
