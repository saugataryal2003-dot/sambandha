'use client';

import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export function HomeButton() {
  return (
    <motion.a
      href="/"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
      className="fixed left-4 top-4 z-50 flex items-center gap-1.5 rounded-full border border-white/15 bg-ink/60 px-3.5 py-2 text-sm font-medium text-cream/80 backdrop-blur-xl transition-all duration-200 hover:-translate-x-0.5 hover:border-white/30 hover:text-cream active:translate-x-0 md:left-6 md:top-6"
      aria-label="Back to home"
    >
      <ChevronLeft className="h-4 w-4" strokeWidth={2} />
      <span className="font-jp text-xs">Home</span>
    </motion.a>
  );
}
