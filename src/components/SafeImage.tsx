import React, { useState } from 'react';
import { IecBreakerMark } from './ElectricalSymbols';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
}) => {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#0F1724] to-[#080D17] p-6 text-center text-slate-400 ${className}`}
        role="img"
        aria-label={alt}
      >
        <IecBreakerMark className="h-8 w-8 text-sky-400/70" />
        <span className="text-xs font-medium text-slate-300 max-w-[200px]">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};
