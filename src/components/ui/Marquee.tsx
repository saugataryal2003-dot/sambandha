'use client';

import { ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';
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
  const prefersReducedMotion = useReducedMotion();

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
          !prefersReducedMotion && pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={
          prefersReducedMotion
            ? undefined
            : {
                animation: `marquee ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
              }
        }
      >
        {children}
        {!prefersReducedMotion && children}
      </div>
    </div>
  );
}
