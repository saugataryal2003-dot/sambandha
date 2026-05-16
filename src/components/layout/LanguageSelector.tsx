'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';

export function LanguageSelector() {
  const { hasSelected, selectLang } = useLang();

  return (
    <AnimatePresence>
      {!hasSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          data-lenis-prevent
        >
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(700px circle at 50% 40%, rgba(212, 165, 116, 0.2), transparent 65%)',
            }}
          />

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-6 max-w-2xl text-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-full ring-1 ring-saffron-300/30"
            >
              <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-saffron-200 via-saffron-300 to-saffron-500 font-display text-3xl font-bold text-ink">
                S
              </div>
            </motion.div>

            <h1 className="font-display text-5xl font-light tracking-tight text-cream md:text-7xl">
              Sambandha
            </h1>
            <p className="mt-2 font-jp text-base text-saffron-300/90 md:text-lg">
              サンバンダ
            </p>

            <div className="my-10 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-cream/20" />
              <span className="font-jp text-xs tracking-[0.3em] text-cream/40">
                ようこそ · WELCOME
              </span>
              <span className="h-px w-12 bg-cream/20" />
            </div>

            <p className="mb-3 font-jp text-base text-cream/60">
              言語をお選びください
            </p>
            <p className="mb-10 text-sm text-cream/40">
              Please select your language
            </p>

            <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => selectLang('ja')}
                className="group relative flex-1 overflow-hidden rounded-2xl border border-saffron-300/30 bg-saffron-300/5 px-8 py-6 transition hover:border-saffron-300/60 hover:bg-saffron-300/10"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-saffron-300/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <div className="relative">
                  <p className="font-jp text-2xl font-light text-cream">日本語</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-cream/40">
                    Japanese
                  </p>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => selectLang('en')}
                className="group relative flex-1 overflow-hidden rounded-2xl border border-saffron-300/30 bg-saffron-300/5 px-8 py-6 transition hover:border-saffron-300/60 hover:bg-saffron-300/10"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-saffron-300/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <div className="relative">
                  <p className="font-display text-2xl font-light text-cream">English</p>
                  <p className="mt-1 font-jp text-xs tracking-widest text-cream/40">
                    英語
                  </p>
                </div>
              </motion.button>
            </div>

            <p className="mt-10 font-jp text-xs text-cream/30">
              幸手市の本格インド料理 · Authentic Indian Cuisine in Satte
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
