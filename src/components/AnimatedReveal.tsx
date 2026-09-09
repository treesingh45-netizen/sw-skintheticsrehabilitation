import React, { useEffect, useRef, useState } from 'react';

interface AnimatedRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'text-reveal' | 'fade-left' | 'fade-right';
  delay?: number;
  className?: string;
  threshold?: number;
}

export const AnimatedReveal: React.FC<AnimatedRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.12,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 translate-y-6';

    switch (animation) {
      case 'fade-up':
        return 'animate-fade-in-up';
      case 'fade-in':
        return 'animate-fade-in';
      case 'text-reveal':
        return 'animate-text-reveal';
      case 'fade-left':
        return 'animate-fade-in-left';
      case 'fade-right':
        return 'animate-fade-in-right';
      default:
        return 'animate-fade-in-up';
    }
  };

  return (
    <div
      ref={domRef}
      style={{ animationDelay: delay ? `${delay}ms` : undefined }}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};
