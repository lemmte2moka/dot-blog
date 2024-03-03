import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = 'OIfDDAlgRJZKkeZUbX0Jyot8H9fK6J2yOQEQvPEI8fI';
    const response = await fetch('https://dot-blog.cdn.newt.so/v1/blog/post/', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json', // 他のヘッダーも必要なら追加
      },
    }).then(res => res.json())
    res.status(200).json({ message: 'Hello from API', response });
  } catch (error) {
    res.status(500).json({ error: 'failed to load data' });
  }
}
