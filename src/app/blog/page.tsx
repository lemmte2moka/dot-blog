import Image from 'next/image';
import { createClient } from 'newt-client-js';
import { cache } from 'react';
import BlogItems from './component/BlogItems';
import Mv from '../../component/Mv';
const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
});
interface Article {
  _id: string;
  pickup: boolean;
  title: string;
  date: string;
  category: string;
  body: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
    customOrder: number;
    raw: {
      createdAt: string;
      updatedAt: string;
      firstPublishedAt: string;
      publishedAt: string;
    }
  };
  thumb: {
    _id: string;
    altText: string;
    description: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    height: number;
    metadata: object; // 必要に応じて修正
    src: string;
    title: string;
    width: number;
  };
  sns: object[]; // 必要に応じて修正
}

export const getArticles = cache(async () => {
  const { items } = await client.getContents<Article>({
    appUid: 'blog',
    modelUid: 'post',
  })
  return items
});

export default async function Blog() {
  const articles = await getArticles();
  
  return (
    <div>
      <main className="p-blog">
        <Mv title={'BLOG'} />
        <BlogItems obj={articles} />
      </main>
    </div>
  )
}