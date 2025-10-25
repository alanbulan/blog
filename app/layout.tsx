import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getProfile } from '@/lib/content'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '阿岚不懒 | AlanBulan - 全能型创作者',
  description: '阿岚不懒的个人博客 - 分享技术、设计、创意与生活',
  keywords: '阿岚不懒, AlanBulan, 博客, 技术, 设计, 全栈开发',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const profile = getProfile()
  
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
