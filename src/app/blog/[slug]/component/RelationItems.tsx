"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";

// Article型の定義
interface Article {
  _id: string;
  pickup: boolean;
  title: string;
  date: string;
  category: string;
  body: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
    customOrder: number;
    raw: {
      createdAt: string;
      updatedAt: string;
      firstPublishedAt: string;
      publishedAt: string;
    }
  };
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

interface Props {
  obj: Article[];
  category: string;
}

const RelationItems: React.FC<Props> = ({ obj, category }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [pickUpItems, setPickUpItems] = useState<Article[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 初回レンダー時にウィンドウの幅を取得
    handleResize();

    // ウィンドウのリサイズ時にイベントリスナーを設定
    window.addEventListener('resize', handleResize);

    // コンポーネントのアンマウント時にイベントリスナーをクリーンアップ
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // 昇順
    const filteredPickUpItems = obj.toSorted((a:Article,b:Article) => new Date(b._sys.createdAt).getTime() - new Date(a._sys.createdAt).getTime()).filter(items => items.category === category).slice(0, 3);
    setPickUpItems(filteredPickUpItems);
  }, [obj]); // objが変更されたときのみ実行される

  // PCとSPでheightとwidthの値を変えるための条件分岐
  const height = windowWidth >= 961 ? 215 : 180;
  const width = windowWidth >= 961 ? 345 : 280;

  const getClassForCategory = (category: string): string => {
    switch (category) {
      case 'デザイン':
        return 'is-design';
      case 'クリエイティブコーダー':
        return 'is-creative';
      case 'フロントエンド':
        return 'is-frontend';
      default:
        return '';
    }
  }

  return (
    <section className='l-relation-article'>
      <div className='l-container'>
        <h2 className='l-relation-article__heading'>関連する記事 </h2>
        <div className='l-relation-article__contents l-media-link'>
          <ul className='l-relation-article__list'>
            {pickUpItems.map(items => (
              <li className='l-relation-article__item' key={items._id}>
                <Link href={'/blog/page/?id='+items._id+''} className="l-relation-article__link l-media-link__link">
                  <p className='l-relation-article__media l-media-link__media'>
                    <Image
                      src={items.thumb.src}
                      alt={items.thumb.altText}
                      width={width}
                      height={height}
                      className="l-relation-article__thumb l-media-link__img"
                      priority
                    />
                  </p>
                  <p className={`l-relation-article__tag ${getClassForCategory(items.category)} l-media-link__tag`}><span className='p-top-blog__tag-text l-media-link__tag-text'>{items.category}</span></p>
                  <p className='l-relation-article__title l-media-link__title'>{items.title}</p>
                </Link>
              </li>
            ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
};

export default RelationItems;