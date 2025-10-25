import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react'
import { getProfile, getSocial } from '@/lib/content'

export default function Footer() {
  const profile = getProfile()
  const social = getSocial()
  
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: social.github },
    { name: 'Twitter', icon: Twitter, href: social.twitter },
    { name: 'LinkedIn', icon: Linkedin, href: social.linkedin },
    { name: 'Email', icon: Mail, href: `mailto:${social.email}` },
  ]
  return (
    <footer className="mt-20 glass-effect border-t border-neutral-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">{profile.name}</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-neutral-800 mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/blog" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  博客文章
                </a>
              </li>
              <li>
                <a href="/projects" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  项目展示
                </a>
              </li>
              <li>
                <a href="/skills" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  技能树
                </a>
              </li>
              <li>
                <a href="/about" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  关于我
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-neutral-800 mb-4">关注我</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-100 hover:bg-primary-600 text-neutral-600 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-200 text-center">
          <p className="text-neutral-600 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by {profile.name}
          </p>
          <p className="text-neutral-500 text-xs mt-2">
            © {new Date().getFullYear()} {profile.englishName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
