import Image from 'next/image';
import { createClient } from 'newt-client-js';
import { cache } from 'react'
const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})
interface Article {
  _id: string
  title: string
  slug: string
  body: string
}

export const getArticles = cache(async () => {
  const { items } = await client.getContents<Article>({
    appUid: 'blog',
    modelUid: 'post',
  })
  return items
});

export default async function Top() {
  const articles = await getArticles()
  // console.log(articles)
  return (
    <div>
      <main className="p-top">

      </main>
    </div>
  )
}
