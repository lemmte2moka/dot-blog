"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType
}

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

const PickUp: React.FC<Props> = ({ obj }, props) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [pickUpItems, setPickUpItems] = useState<Article[]>([]);
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

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
    // ピックアップアイテムをフィルタリングして設定
    const filteredPickUpItems = obj.filter(item => item.pickup).toSorted((a:Article,b:Article) => new Date(a._sys.createdAt).getTime() - new Date(b._sys.createdAt).getTime()).slice(0, 8);
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
    <section className='p-top-pickup'>
      <div className='l-container'>
        <h2 className='p-top-pickup__heading'>PICK UP</h2>
        <div className='embla p-top-pickup__slider l-media-link' ref={emblaRef}>
          <ul className='p-top-pickup__list embla__container'>
            {pickUpItems.map(items => (
              <li className='p-top-pickup__item embla__slide' key={items._id}>
                <Link href={'/blog/page/?id='+items._id+''} className="p-top-pickup__link l-media-link__link">
                  <p className='p-top-pickup__media l-media-link__media'>
                    <Image
                      src={items.thumb.src}
                      alt={items.thumb.altText}
                      width={width}
                      height={height}
                      className="p-top-pickup__thumb l-media-link__img"
                      priority
                    />
                  </p>
                  <p className={`p-top-pickup__tag ${getClassForCategory(items.category)} l-media-link__tag`}><span className='p-top-pickup__tag-text l-media-link__tag-text'>{items.category}</span></p>
                  <p className='p-top-pickup__title l-media-link__title'>{items.title}</p>
                </Link>
              </li>
            ))
            }
          </ul>
        </div>
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
    </section>
  )
};

export default PickUp;