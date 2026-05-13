'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  duration?: number;
  once?: boolean;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: { delay: number; duration: number; y: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration,
      delay: custom.delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
  y = 40,
  duration = 0.9,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={variants}
      custom={{ delay, duration, y }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function RevealText({
  children,
  className,
  delay = 0,
  stagger = 0.04,
  once = true,
}: RevealTextProps) {
  const words = children.split(' ');

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-30px' }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      className={cn('inline-block', className)}
      aria-label={children}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-baseline"
          aria-hidden
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%' },
              visible: {
                y: '0%',
                transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
            {i < words.length - 1 && <>&nbsp;</>}
          </motion.span>
        </motion.span>
      ))}
    </motion.span>
  );
}
