import Image from 'next/image';
import type { Metadata } from 'next'
import { getArticles, getArticleBySlug } from '../../../libs/newt';

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }))
}
export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const article = await getArticleBySlug(slug)

  return {
    title: article?.title,
    description: '投稿詳細ページです',
  }
}


export default async function Blog({ params }: Props)  {
  const { slug } = params
  const article = await getArticleBySlug(slug)
  if (!article) return

  return (
    <div>
      <main className="p-blog">
        <h1>{article.title}</h1>
      </main>
    </div>
  )
}
