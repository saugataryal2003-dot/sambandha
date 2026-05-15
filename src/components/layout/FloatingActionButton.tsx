'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, X, Menu as MenuIcon } from 'lucide-react';
import { RESTAURANT } from '@/lib/utils';
import { useLang } from '@/lib/i18n';

export function FloatingActionButton() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const labels = lang === 'ja'
    ? { call: '電話で予約', form: 'フォーム予約', lunch: 'ランチメニュー' }
    : { call: 'Call to Book', form: 'Reserve Online', lunch: 'Lunch Menu' };

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 flex flex-col gap-3 md:hidden"
          >
            <motion.a
              href={`tel:${RESTAURANT.phoneRaw}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 rounded-full bg-saffron-300 px-5 py-3 font-jp text-sm font-semibold text-ink shadow-lg shadow-saffron-500/40"
            >
              <Phone className="h-5 w-5" />
              <span>{labels.call}</span>
            </motion.a>

            <motion.a
              href="#reservations"
              onClick={() => setOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 rounded-full bg-white px-5 py-3 font-jp text-sm font-semibold text-ink shadow-lg shadow-black/30"
            >
              <Calendar className="h-5 w-5" />
              <span>{labels.form}</span>
            </motion.a>

            <motion.a
              href="/menu/lunch"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 font-jp text-sm font-semibold text-cream shadow-lg shadow-black/30"
            >
              <MenuIcon className="h-5 w-5" />
              <span>{labels.lunch}</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((s) => !s)}
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-saffron-300 text-ink shadow-lg shadow-saffron-500/40 transition-colors md:hidden"
        aria-label={open ? 'Close menu' : 'Open quick actions'}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
