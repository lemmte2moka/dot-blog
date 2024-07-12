import { getArticles, getArticleBySlug } from '../../../hooks/newt';
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import Button from '../../../component/atoms/Button';
import RelationItems from '../../../component/pages/blog/RelationItems';
import type { Article } from '../../../types/';

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article: Article) => ({
    slug: article.slug,
  }));
}
export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const article = await getArticleBySlug(slug)

  return {
    title: article?.title,
    description: '投稿詳細ページです',
  }
}

export default async function Article({ params }: Props) {
  const { slug } = params
  const article = await getArticleBySlug(slug);
  const relationArticle = await getArticles();
  if (!article) return

  const date: Date = new Date(article._sys.createdAt);
  const dateString:string = date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const getClassForCategory = (category: string): string => {
    switch (category) {
      case 'デザイン':
        return 'is-design';
      case 'クリエイティブコーダー':
        return 'is-creative';
      case 'フロントエンド':
        return 'is-frontend';
      default:
        return '';
    }
  }
  
  return (
    <main className="p-article">
      <p className={`p-article__thumbnail ${getClassForCategory(article.category)}`}>
        <Image
          src={article.thumb.src}
          alt={article.thumb.altText}
          width="900"
          height="563"
          className="p-article__thumbnail-img"
          priority
        />
      </p>
      <div className='l-container--sm'>
        <h1 className='p-article__title'>{article.title}</h1>
        <div className='p-article__addition'>
          <div className='p-article__date-tag'>
            <p className='p-article__date'>{dateString}</p>
            <p className={`p-article__tag ${getClassForCategory(article.category)}`}><span className='p-article__tag-text'>{article.category}</span></p>
          </div>
          <ul className='p-article__sns-list'>
            {article.sns.map(item => (
              <li className='p-article__sns-item' key={item._id} dangerouslySetInnerHTML={{ __html: item.snsLink }}></li>
            ))}
          </ul>
        </div>
        <div className='p-article__body'>
          <div className='p-article__contents' dangerouslySetInnerHTML={{ __html: article.body }} />
          <Button {...{href: '/blog/', subText:'BACK', text: 'BLOG', position: 'center', specialClass: '' }} />
        </div>
      </div>
      <div className='p-article__relation'>
        <RelationItems obj={relationArticle} category={article.category} />
      </div>
    </main>
  )
}