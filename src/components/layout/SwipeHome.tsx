'use client';

import { useRouter } from 'next/navigation';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef } from 'react';

const DRAG_THRESHOLD = 120; // px to the left before navigation triggers

export function SwipeHome() {
  const router = useRouter();
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // As the chip is dragged left, a "← Home" trail fades in
  const trailOpacity = useTransform(x, [-DRAG_THRESHOLD, -40, 0], [1, 0.5, 0]);
  const trailX = useTransform(x, [-DRAG_THRESHOLD, 0], [-80, 0]);

  // The "S" chip scales slightly on drag
  const chipScale = useTransform(x, [-DRAG_THRESHOLD, 0], [0.88, 1]);

  // Background overlay darkens as you drag
  const overlayOpacity = useTransform(x, [-DRAG_THRESHOLD, 0], [0.35, 0]);

  function handleDragEnd() {
    if (x.get() < -DRAG_THRESHOLD) {
      // Committed — animate off screen then navigate
      animate(x, -800, {
        type: 'spring',
        stiffness: 200,
        damping: 30,
        onComplete: () => router.push('/'),
      });
    } else {
      // Not far enough — spring back
      animate(x, 0, { type: 'spring', stiffness: 300, damping: 28 });
    }
  }

  return (
    <>
      {/* Dark overlay that appears during drag — gives page-swipe feel */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-40 bg-ink"
        style={{ opacity: overlayOpacity }}
        aria-hidden
      />

      {/* Drag container — fixed top-right */}
      <div
        ref={containerRef}
        className="fixed right-4 top-4 z-50 flex items-center md:right-6 md:top-6"
      >
        {/* "Home" trail label — appears left of the chip as you drag */}
        <motion.span
          style={{ opacity: trailOpacity, x: trailX }}
          className="pointer-events-none mr-2 font-jp text-xs text-cream/70 select-none"
          aria-hidden
        >
          ← Home
        </motion.span>

        {/* The draggable "S" chip */}
        <motion.button
          drag="x"
          dragConstraints={{ left: -600, right: 0 }}
          dragElastic={{ left: 0.15, right: 0.05 }}
          style={{ x, scale: chipScale }}
          onDragEnd={handleDragEnd}
          onClick={() => router.push('/')}
          aria-label="Drag left or tap to go home"
          className="flex h-10 w-10 cursor-grab items-center justify-center rounded-full border border-white/20 bg-ink/70 backdrop-blur-xl active:cursor-grabbing"
          whileHover={{ borderColor: 'rgba(212,165,116,0.5)' }}
        >
          {/* S logo — mirrors the Nav logo */}
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-saffron-200 via-saffron-300 to-saffron-500">
            <span className="font-display text-sm font-bold leading-none text-ink">S</span>
          </div>
        </motion.button>
      </div>
    </>
  );
}
