"use client";
import Image from 'next/image';
import { createClient } from 'newt-client-js';
import { cache, useEffect, useState } from 'react';
import axios from "axios";
// const client = createClient({
//   spaceUid: process.env.NEWT_SPACE_UID + '',
//   token: process.env.NEWT_CDN_API_TOKEN + '',
//   apiType: 'cdn',
// });
// interface Article {
//   _id: string;
//   pickup: boolean;
//   title: string;
//   date: string;
//   categry: string;
//   slug: string;
//   body: string;
// }

// export const getArticles = cache(async () => {
//   const { items } = await client.getContents<Article>({
//     appUid: 'blog',
//     modelUid: 'post',
//   })
//   return items
// });

export default function Top() {
  const [data, setData] = useState<string>('')
  // const articles = await getArticles()
  // console.log(articles)
  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + '')
      .then(response => {
        setData(response.data);
        console.log(response.data); // データをログに出力（必要に応じて使用）
      })
      .catch(error => {
        console.error('データの取得に失敗しました:', error);
      });
  }, []);
  
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

      </main>
    </div>
  )
}
