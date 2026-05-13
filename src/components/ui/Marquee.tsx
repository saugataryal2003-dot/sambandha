'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: number;
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  speed = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'group relative flex w-full overflow-hidden marquee-mask',
        className
      )}
    >
      <div
        className={cn(
          'flex shrink-0 items-center justify-around gap-12 will-change-transform',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
