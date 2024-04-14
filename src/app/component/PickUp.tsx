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
    const filteredPickUpItems = obj.filter(item => item.pickup);
    setPickUpItems(filteredPickUpItems);
  }, [obj]); // objが変更されたときのみ実行される
  console.log(pickUpItems)

  // PCとSPでheightとwidthの値を変えるための条件分岐
  const height = windowWidth >= 961 ? 400 : 180;
  const width = windowWidth >= 961 ? 900 : 400;
  
  return (
    <section className='p-top-pickup'>
      <div className='l-container'>
        <div className='embla p-top-pickup__slider' ref={emblaRef}>
          <ul className='p-top-pickup__list embla__container'>
            {pickUpItems.map(items => (
              <li className='p-top-pickup__item embla__slide' key={items._id}>
                <Link href={'/blog/?page='+items._id+''} className="p-top-pickup__link">
                  <p className='p-top-pickup__media'>
                    <Image
                      src={items.thumb.src}
                      alt={items.thumb.altText}
                      width={width}
                      height={height}
                      className="p-top-pickup__thumb"
                      priority
                    />
                  </p>
                  <p className='p-top-pickup__tag'><span className='p-top-pickup__tag-text'>{items.category}</span></p>
                  <p className='p-top-pickup__title'>{items.title}</p>
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