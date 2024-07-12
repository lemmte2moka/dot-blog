import { useEffect, useRef, MutableRefObject } from 'react';

const useIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit
): MutableRefObject<HTMLDivElement | null> => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [callback, options]);

  return ref;
};

export default useIntersectionObserver;