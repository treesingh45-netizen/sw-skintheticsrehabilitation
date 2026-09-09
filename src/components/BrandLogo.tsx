import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const sizeMap = {
    sm: { img: 'w-9 h-9', text: 'text-base', sub: 'text-[9px]' },
    md: { img: 'w-11 h-11', text: 'text-lg', sub: 'text-[10px]' },
    lg: { img: 'w-14 h-14', text: 'text-xl', sub: 'text-[11px]' },
    xl: { img: 'w-20 h-20', text: 'text-2xl', sub: 'text-[13px]' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Exact authentic brand logo mark from user */}
      <div className="relative shrink-0 overflow-hidden rounded-md bg-white p-1 shadow-xs border border-zinc-200/80">
        <img
          src="/logo.jpg"
          alt="SW SKINTHETICS REHABILITATION Logo"
          className={`${currentSize.img} object-contain`}
          loading="eager"
        />
      </div>

      {showSubtitle && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1 font-bold tracking-tight">
            <span className="text-[#FF5C00] font-black">SW</span>
            <span
              className={
                variant === 'light'
                  ? 'text-white tracking-wider font-semibold'
                  : 'text-zinc-900 tracking-wider font-semibold'
              }
            >
              SKINTHETICS
            </span>
          </div>
          <span
            className={`tracking-[0.22em] uppercase font-medium ${
              variant === 'light' ? 'text-zinc-400' : 'text-zinc-500'
            } ${currentSize.sub}`}
          >
            (REHABILITATION)
          </span>
        </div>
      )}
    </div>
  );
};
