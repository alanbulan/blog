import { Mail, Github, Twitter, Linkedin, MessageSquare, Send } from 'lucide-react'
import { getSocial } from '@/lib/content'

export default function ContactPage() {
  const social = getSocial()
  
  const contactMethods = [
    {
      icon: Mail,
      title: '电子邮件',
      value: social.email,
      href: `mailto:${social.email}`,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: `@${social.github.split('/').pop()}`,
      href: social.github,
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: Twitter,
      title: 'Twitter',
      value: `@${social.twitter.split('/').pop()}`,
      href: social.twitter,
      color: 'from-sky-400 to-blue-500',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: social.linkedin.split('/').pop() || 'LinkedIn',
      href: social.linkedin,
      color: 'from-blue-600 to-blue-700',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="section-title">联系我</h1>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          期待与你交流技术、设计、产品或任何有趣的想法
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactMethods.map((method, index) => {
          const Icon = method.icon
          return (
            <a
              key={method.title}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="glass-effect rounded-2xl p-8 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">{method.title}</h3>
              <p className="text-primary-600 font-medium">{method.value}</p>
            </a>
          )
        })}
      </div>

      {/* Contact Form */}
      <div className="glass-effect rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="w-6 h-6 text-primary-600" />
          <h2 className="text-2xl font-bold text-neutral-800">发送消息</h2>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                姓名 *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                placeholder="你的名字"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                邮箱 *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
              主题 *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              placeholder="消息主题"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
              消息内容 *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
              placeholder="说点什么..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full btn-primary flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            发送消息
          </button>
        </form>

        <p className="mt-6 text-sm text-neutral-500 text-center">
          通常我会在 24 小时内回复你的消息
        </p>
      </div>

      {/* Additional Info */}
      <div className="glass-effect rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-neutral-800 mb-4">合作机会</h3>
        <p className="text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          我对以下类型的合作特别感兴趣：
          <br />
          全栈开发项目 · UI/UX设计咨询 · 技术分享演讲 · 开源项目协作
          <br />
          如果你有任何想法或机会，欢迎随时联系我！
        </p>
      </div>
    </div>
  )
}
