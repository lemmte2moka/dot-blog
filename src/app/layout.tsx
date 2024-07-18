import type { Metadata } from 'next';
import './globals.css';
import '../styles/style.scss';
import Header from "../component/organisms/Header";
import Footer from "../component/organisms/Footer";

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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
