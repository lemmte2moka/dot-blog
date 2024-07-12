"use client";
import React, { useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface FadeInProps {
  children: React.ReactNode;
  delay?: string;
  direction?: 'left' | 'right' | 'up' | 'down' | 'none';
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = "0s", direction = "none" }) => {
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

  const directionClass = direction !== 'none' ? `fade-in-${direction}` : '';

  return (
    <div
      ref={ref}
      className={`l-fadeIn ${directionClass} ${isVisible ? 'l-fadeInVisible' : ''}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
