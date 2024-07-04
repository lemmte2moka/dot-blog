"use client"
import { useNotionFetch } from '../../../hooks/notionFetch';
import { Page } from '../../../types';
import { css } from '@kuma-ui/core';
import { breakpoints } from './../../templates/Breakpoints';
const styles = {
  table: css`
    width: 100%;
  `,
  tTitle: css`
    font-size: 1.6rem;
    font-family: 'Noto Sans', sans-serif;
    font-weight: bold;
    color: #333;
    border-bottom: 2px solid green;
    padding: 10px 5px;
  `,
  tbodyHead: css`
    vertical-align: middle;
    font-size: 1.6rem;
    font-family: 'Noto Sans', sans-serif;
    font-weight: medium;
    color: #333;
    border-bottom: 2px solid green;
    padding: 15px 5px;
  `,
  tbodyData: css`
    font-size: 1.6rem;
    font-family: 'Noto Sans', sans-serif;
    font-weight: medium;
    color: #333;
    border-bottom: 2px solid lightgray;
    padding: 15px 5px;
    &.is-center {
      vertical-align: middle;
    }
  `,
  link: css`
    display: block;
    padding-left: 15px;
    position: relative;
    transition: all 0.3s;
    &:before {
      content: '';
      display: block;
      clip-path: polygon(100% 50%, 0 0, 0 100%);
      width: 8px;
      height: 12px;
      background-color: #5E718B;
      position: absolute;
      top: 5px;
      left: 0;
    }
    &:hover {
      color: #5E718B;
    }
  `,
};
export default function KnowledgeItems() {
  const { data, error, loading } = useNotionFetch();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return <p>表示できる情報はございません。</p>;
  }

  // 必要なデータだけをdatasに格納
  const datas = data?.data.results;
  const dataItems: Page[] = datas.sort((a, b) => new Date(a.created_time).getTime() - new Date(b.created_time).getTime());
  const sliceDataItems = dataItems.slice(0, 5)
  const getClassForCategory = (category: string): string => {
    switch (category) {
      case 'UI/UX':
        return 'is-brown';
      case 'FE全般':
        return 'is-blue';
      case '生活':
        return 'is-green';
      case 'ゲーム':
        return 'is-purple';
      case 'ライブラリ':
        return 'is-blue';
      case 'html/css':
        return 'is-yellow';
      case 'デザイン':
        return 'is-yellow';
      case 'AI':
        return 'is-purple';
      case 'js':
        return 'is-blue';
      case 'フレームワーク':
        return 'is-blue';
      default:
        return '';
    }
  }
  return (
    <>
      <table className={styles.table}>
        <colgroup>
          <col style={{ width: '40%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '40%' }} />
        </colgroup>
        <thead className='p-knowledge__thead'>
          <tr>
            <th className={styles.tTitle} scope='col'>タイトル</th>
            <th className={styles.tTitle} scope='col'>タグ</th>
            <th className={styles.tTitle} scope='col'>参考</th>
          </tr>
        </thead>
        <tbody className='p-knowledge__tbody'>
          {sliceDataItems.map((item) => (
            <tr key={item.id}>
              <th scope='row' className={styles.tbodyHead}>{item.properties.title.title[0]?.plain_text}</th>
              <td className={styles.tbodyData}><p className={`l-tag ${getClassForCategory(item.properties.tag.multi_select[0]?.name)}`}><span className='l-tag__text'>{item.properties.tag.multi_select.map(tag => tag.name).join(', ')}</span></p></td>
              <td className={styles.tbodyData}>
                {item.properties.url.url === null ?
                  '' :
                  <a href={item.properties.url.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    {item.properties.pagetitle.rich_text[0]?.plain_text}
                  </a>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}