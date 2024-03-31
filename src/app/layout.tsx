import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../styles/style.scss'
import Header from "@/component/header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'dot-Blog',
  description: 'フロントエンドについてのブログを掲載してます。',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
