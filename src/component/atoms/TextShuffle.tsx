"use client";

import React, { useEffect, useRef, useState } from 'react';
import ShuffleText from 'shuffle-text';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface TextShuffleProps {
  children: React.ReactNode;
  delay?: string;
}

const TextShuffle: React.FC<TextShuffleProps> = ({ children, delay = "0s" }) => {
  const textRef = useRef<HTMLDivElement>(null);
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
    if (isVisible && textRef.current) {
      const shuffleInstance = new ShuffleText(textRef.current);
      setTimeout(() => {
        textRef.current!.style.visibility = 'visible'; // アニメーション開始時に可視化
        shuffleInstance.start();
      }, parseFloat(delay) * 1000);
    }
  }, [isVisible, delay]);

  return (
    <span ref={ref}>
      <span ref={textRef} style={{ visibility: 'hidden' }}>
        {children}
      </span>
    </span>
  );
};

export default TextShuffle;
