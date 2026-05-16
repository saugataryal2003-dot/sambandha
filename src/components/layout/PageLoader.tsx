'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-[200] grid place-items-center bg-ink"
          aria-hidden
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
              className="relative h-14 w-14"
            >
              <span className="absolute inset-0 rounded-full border border-white/10" />
              <span className="absolute inset-0 rounded-full border border-transparent border-t-saffron-300" />
            </motion.div>
            <p className="font-display text-2xl font-light tracking-wide text-cream/90">
              Sambandha
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
