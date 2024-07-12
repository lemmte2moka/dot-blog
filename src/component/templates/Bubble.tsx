"use client"
import React, { useEffect, useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
interface Bubbles {
  mainColor: string;
  subColor: string;
  topPc: string;
  topSp: string;
  bottomPc: string;
  bottomSp: string;
}

const Bubble: React.FC<Bubbles> = ({ mainColor, subColor, topPc='', topSp='', bottomPc='', bottomSp='' }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  const ref = useIntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    {
      threshold: 0.1,
    }
  );

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

  const topGap = windowWidth >= 961 ? topPc : topSp;
  const bottomGap = windowWidth >= 961 ? bottomPc : bottomSp;

  const styles = {
    top: topGap !== '' ? `${topGap}px`: 'inicial',
    bottom: bottomGap !== '' ? `${bottomGap}px`: 'inicial',
  }
  return (
    <>
      <div className="l-bubble" style={styles}>
        <div className="l-bubble__main-wrapper">
          <div ref={ref} className={`l-bubble__main is-${mainColor} ${isVisible ? 'is-visible' : ''}`}></div>
        </div>
        <div ref={ref} className={`l-bubble__sub is-${subColor} ${isVisible ? 'is-visible' : ''}`}></div>
      </div>
    </>
  );
}

export default Bubble;