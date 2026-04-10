import type { Metadata } from 'next'
import { Geist, Geist_Mono, Funnel_Display } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import Agenda from '@/components/ui/Agenda'
import BirdCursor from '@/components/ui/BirdCursor'
import GlowCursor from '@/components/ui/GlowCursor'

// next/font 会在构建时下载字体并自托管，不会向 Google 发出运行时请求
// variable 模式将字体注入为 CSS 自定义属性，配合 @theme 中的 --font-sans 使用
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const funnelDisplay = Funnel_Display({
  variable: '--font-funnel-display',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Vanni | Full-Stack Engineer',
  description:
    'Vanni 的个人作品集 — 全栈工程师，前端偏重，热衷工程化与用户体验。',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} ${funnelDisplay.variable} antialiased`}
    >
      <body className="bg-background text-text min-h-screen font-sans cursor-none">
        <div className="fixed inset-0 -z-10 bg-[url('/images/background.png')] bg-cover bg-center" />
        <TopBar />
        <Agenda />
        <BirdCursor />
        <GlowCursor />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
