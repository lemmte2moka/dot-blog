import Image from 'next/image';
import { createClient } from 'newt-client-js';
import { cache } from 'react';
import BlogItems from './component/BlogItems';
import Mv from '../../component/Mv';
import { getArticles } from '../../libs/newt';

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
