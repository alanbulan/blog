import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getProfile, getHomepage } from '@/lib/content'

const inter = Inter({ subsets: ['latin'] })

const profile = getProfile()
const homepage = getHomepage()

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.englishName} - ${profile.bio.split('，')[0]}`,
  description: `${profile.bio} ${homepage.subtitle}`,
  keywords: `${profile.name}, ${profile.englishName}, 博客, 技术, 设计, 全栈开发, 产品设计`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/30">
          <Header profile={profile} />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
