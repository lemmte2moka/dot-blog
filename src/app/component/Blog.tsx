"use client"
import React, { useEffect, useState } from 'react';
import Button from '../../component/Button';
import Bubble from '../../component/Bubble';
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
}

const Blog: React.FC<Props> = ({ obj }) => {
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
    const filteredPickUpItems = obj.toSorted((a:Article,b:Article) => new Date(a._sys.createdAt).getTime() - new Date(b._sys.createdAt).getTime()).slice(0, 9);
    setPickUpItems(filteredPickUpItems);
  }, [obj]); // objが変更されたときのみ実行される

  // PCとSPでheightとwidthの値を変えるための条件分岐
  const height = windowWidth >= 961 ? 215 : 180;
  const width = windowWidth >= 961 ? 345 : 280;

  const setBubble = {mainColor:'light-blue',subColor:'blue',topPc:'',topSp:'',bottomPc:'-340',bottomSp:'0'}

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
    <section className='p-top-blog'>
      <div className='l-container'>
        <h2 className='p-top-blog__heading l-heading'>
          <span className='l-heading--en'>BOLG</span>
          <span className='l-heading--ja'>ブログ</span>
        </h2>
        <div className='p-top-blog__contents l-media-link'>
          <ul className='p-top-blog__list'>
            {pickUpItems.map(items => (
              <li className='p-top-blog__item' key={items._id}>
                <Link href={'/blog/?page='+items._id+''} className="p-top-blog__link l-media-link__link">
                  <p className='p-top-blog__media l-media-link__media'>
                    <Image
                      src={items.thumb.src}
                      alt={items.thumb.altText}
                      width={width}
                      height={height}
                      className="p-top-blog__thumb l-media-link__img"
                      priority
                    />
                  </p>
                  <p className={`p-top-blog__tag ${getClassForCategory(items.category)} l-media-link__tag`}><span className='p-top-blog__tag-text l-media-link__tag-text'>{items.category}</span></p>
                  <p className='p-top-blog__title l-media-link__title'>{items.title}</p>
                </Link>
              </li>
            ))
            }
          </ul>
          <Button {...{href: '/blog/', text: 'BLOG', position: 'center', specialClass: '' }} />
        </div>
      </div>
      <Bubble {...setBubble} />
    </section>
  )
};

export default Blog;