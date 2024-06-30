"use client"
import { useEffect, useState, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import Image from "next/image";
import Link from "next/link";
import { Article } from '../../../types'

interface Props {
  obj: Article[];
}

const BlogItems: React.FC<Props> = ({ obj }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [Items, setItems] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const targetAreaRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = windowWidth >= 961 ? 9 : 6;

  // URLパラメータに基づいて初期カテゴリを設定する
  useEffect(() => {
    // URLパラメータからカテゴリを取得して適切な初期状態を設定
  const urlParams = new URLSearchParams(window.location.search);
  const categoryFromUrl = urlParams.get('category');
  if (categoryFromUrl) {
    let category = '';
    switch (categoryFromUrl) {
      case 'frontend':
        category = 'フロントエンド';
        break;
      case 'design':
        category = 'デザイン';
        break;
      case 'creativecoder':
        category = 'クリエイティブコーダー';
        break;
      default:
        category = 'ALL';
    }
    setSelectedCategory(category);
    addActiveClassToButton(category);
  }
  }, []);

  // ページネーションのクリックハンドラー
  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);

    // js-target-area要素にスクロールする
    if (targetAreaRef.current) {
      targetAreaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 現在のページに表示するアイテムを絞り込む
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = Items.filter(item => selectedCategory === 'ALL' || item.category === selectedCategory).slice(startIndex, endIndex);;

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
    const filteredItems = obj;
    setItems(filteredItems);
  }, [obj]); // objが変更されたときのみ実行される

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

  // ボタンにis-activeクラスを付与する処理
  const addActiveClassToButton = (category: string) => {
    const buttons = document.querySelectorAll('.p-blog__button');
    buttons.forEach(button => {
      if (button.textContent === category) {
        button.classList.add('is-active');
      } else {
        button.classList.remove('is-active');
      }
    });
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(0);
    // const newUrl = window.location.pathname + (category === 'ALL' ? '' : `?category=${category}`);
    // window.history.pushState({}, '', newUrl);
    addActiveClassToButton(category);
  };

  // PCとSPでheightとwidthの値を変えるための条件分岐
  const height = windowWidth >= 961 ? 215 : 180;
  const width = windowWidth >= 961 ? 345 : 280;

  return (
    <section className='p-top-blog js-target-area' ref={targetAreaRef}>
      <div className='l-container'>
        <div className='p-blog__button-wrapper'>
          <button onClick={() => handleCategoryClick('ALL')} className={`p-blog__button ${selectedCategory === 'ALL' ? 'is-active' : ''}`}>ALL</button>
          <button onClick={() => handleCategoryClick('フロントエンド')} className={`p-blog__button ${selectedCategory === 'フロントエンド' ? 'is-active' : ''}`}>フロントエンド</button>
          <button onClick={() => handleCategoryClick('デザイン')} className={`p-blog__button ${selectedCategory === 'デザイン' ? 'is-active' : ''}`}>デザイン</button>
          <button onClick={() => handleCategoryClick('クリエイティブコーダー')} className={`p-blog__button ${selectedCategory === 'クリエイティブコーダー' ? 'is-active' : ''}`}>クリエイティブコーダー</button>
        </div>
        <div className='p-top-blog__contents l-media-link'>
          <ul className='p-top-blog__list is-full'>
            {displayedItems.map(items => (
              <li className='p-top-blog__item' key={items._id}>
                <Link href={`/blog/${items.slug}/`} className="p-top-blog__link l-media-link__link">
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
            ))}
          </ul>
        </div>
        <ReactPaginate
          pageCount={Math.ceil(Items.filter(item => selectedCategory === 'ALL' || item.category === selectedCategory).length / itemsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          pageClassName='l-pagination__page-item'
          pageLinkClassName='l-pagination__page-link'
          previousLabel='<'
          nextLabel='>'
          breakLabel='...'
          previousClassName='l-pagination__page-item'
          nextClassName='l-pagination__page-item'
          previousLinkClassName='l-pagination__page-link'
          nextLinkClassName='l-pagination__page-link'
          onPageChange={handlePageChange}
          containerClassName={'l-pagination'}
          activeClassName={'is-active'}
          disabledClassName='is-disabled'
        />
      </div>
    </section>
  );
};

export default BlogItems;