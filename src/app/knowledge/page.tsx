"use client"
import React, { useEffect, useState } from 'react';
import Mv from '../../component/templates/Mv';
import { useNotionFetch } from '../../hooks/notionFetch';
import { NotionData, Page } from '../../types';

const Knowledge: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const { data, error, loading } = useNotionFetch();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  // 必要なデータだけをdatasに格納
  const datas = data?.data.results;
  const dataItems: Page[] = datas.sort((a, b) => new Date(a.created_time).getTime() - new Date(b.created_time).getTime());

  // タグで絞り込み
  const allTags = Array.from(new Set(dataItems.flatMap(item => item.properties.tag.multi_select.map(tag => tag.name))));
  const filteredDataItems = selectedTag 
  ? dataItems.filter(item => item.properties.tag.multi_select.some(tag => tag.name === selectedTag))
  : dataItems;
  const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTag(event.target.value);
  };

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
    <div>
      <main className="p-knowledge">
        <Mv title={'KNOWLEDGE'} />
        <section className='l-section--lv2'>
          <div className='l-container'>
            <h2 className='l-heading--h2'>Notionのナレッジ</h2>
            <div className='p-knowledge__filter'>
              <label htmlFor="tag-filter" className='p-knowledge__filter-label'>タグで絞り込み:</label>
              <select className='p-knowledge__filter-select' id="tag-filter" value={selectedTag} onChange={handleTagChange}>
                <option value="">すべて</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
            <table className='p-knowledge__table'>
              <colgroup>
                <col style={{ width: '25%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '35%' }} />
                <col style={{ width: '25%' }} />
              </colgroup>
              <thead className='p-knowledge__thead'>
                <tr>
                  <th className='p-knowledge__t-title' scope='col'>タイトル</th>
                  <th className='p-knowledge__t-title' scope='col'>タグ</th>
                  <th className='p-knowledge__t-title' scope='col'>説明</th>
                  <th className='p-knowledge__t-title' scope='col'>参考</th>
                </tr>
              </thead>
              <tbody className='p-knowledge__tbody'>
                {filteredDataItems.map((item) => (
                  <tr key={item.id}>
                    <th scope='row' className='p-knowledge__tbody-head'>{item.properties.title.title[0]?.plain_text}</th>
                    <td className='p-knowledge__tbody-data is-center'><p className={`l-tag ${getClassForCategory(item.properties.tag.multi_select[0]?.name)}`}><span className='l-tag__text'>{item.properties.tag.multi_select.map(tag => tag.name).join(', ')}</span></p></td>
                    <td className='p-knowledge__tbody-data'>{item.properties.description.rich_text[0]?.plain_text}</td>
                    <td className='p-knowledge__tbody-data'>
                      {item.properties.url.url === null ?
                        '' :
                        <a href={item.properties.url.url} target="_blank" rel="noopener noreferrer" className='p-knowledge__link'>
                          {item.properties.pagetitle.rich_text[0]?.plain_text}
                        </a>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        
      </main>
    </div>
  )
}
export default Knowledge;