import Image from 'next/image';
import { createClient } from 'newt-client-js';
import { cache } from 'react';
import PickUp from './component/PickUp';
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

export default async function Top() {
  const articles = await getArticles();
  // console.log(articles)
  
  return (
    <div>
      <main className="p-top">
        <section className='p-top-mv'>
          <div className='l-container'>
            <h1 className='p-top-mv__heading'>.BLOG</h1>
            <p className='p-top-mv__lead--en'>Blog for frontend engineer.</p>
            <p className='p-top-mv__lead--ja'>フロントエンドエンジニアのつぶやき</p>
          </div>
        </section>
        <PickUp obj={articles} />
      </main>
    </div>
  )
}
