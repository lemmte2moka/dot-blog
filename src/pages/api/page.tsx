import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const notionVersion = '2022-06-28';
    const endPoint = process.env.NOTION_API_ENDPOINT;
    const token = process.env.NOTION_API_TOKEN;
    if (!endPoint) {
      throw new Error('NOTION_API_ENDPOINT is not defined in environment variables');
    }
    const response = await fetch(endPoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Notion-Version': notionVersion,
        'Content-Type': 'application/json', // 他のヘッダーも必要なら追加
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data from Notion API');
    }

    const data = await response.json();

    res.status(200).json({ message: 'Success', data });
  } catch (error) {
    res.status(500).json({ error: 'failed to load data' });
  }
}
