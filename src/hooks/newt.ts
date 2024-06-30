import { createClient } from 'newt-client-js';
import { cache } from 'react';
import { Article } from '../types';

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
});

export const getArticles = cache(async () => {
  const { items } = await client.getContents<Article>({
    appUid: 'blog',
    modelUid: 'blog',
    query: {
      select: ['_id', 'title', 'thumb', 'category', 'pickup', '_sys', 'sns', 'slug', 'body'],
    },
  })
  return items
});

export const getArticleBySlug = cache(async (slug: string) => {
  const article = await client.getFirstContent<Article>({
    appUid: 'blog',
    modelUid: 'blog',
    query: {
      slug,
      select: ['_id', 'title', 'thumb', 'category', 'pickup', '_sys', 'sns', 'slug', 'body'],
    },
  })
  return article
})