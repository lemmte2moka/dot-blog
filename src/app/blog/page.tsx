import Image from 'next/image';
import { createClient } from 'newt-client-js';
import { cache } from 'react';
import BlogItems from '../../component/pages/blog/BlogItems';
import Mv from '../../component/templates/Mv';
import { getArticles } from '../../hooks/newt';

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
