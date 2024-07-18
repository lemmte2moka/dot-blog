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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
