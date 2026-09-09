import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  as = 'span',
  delay = 0,
  highlightWords = [],
  highlightClassName = 'text-[#FF5C00]',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (containerRef.current) {
              observer.unobserve(containerRef.current);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentElem = containerRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, []);

  const words = text.split(' ');

  const content = words.map((word, index) => {
    const isHighlighted = highlightWords.some((hw) =>
      word.toLowerCase().includes(hw.toLowerCase())
    );

    return (
      <span
        key={index}
        className={`inline-block transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0 filter-none'
            : 'opacity-0 translate-y-3 blur-[2px]'
        } ${isHighlighted ? highlightClassName : ''}`}
        style={{
          transitionDelay: `${delay + index * 35}ms`,
          marginRight: '0.28em',
        }}
      >
        {word}
      </span>
    );
  });

  return React.createElement(
    as,
    {
      ref: containerRef,
      className: `inline-block ${className}`,
      'aria-label': text,
    },
    content
  );
};
