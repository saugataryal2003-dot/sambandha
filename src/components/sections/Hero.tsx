'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Star } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { useLang } from '@/lib/i18n';

const FOOD_IMAGES = [
  '/images/naan-hero.jpg',
  'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=900&q=80',
  'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=900&q=80',
];

export function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate h-[100svh] min-h-[680px] w-full overflow-hidden bg-ink"
    >
      {/* Animated grid backdrop */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 grid-lines opacity-50"
        aria-hidden
      />

      {/* Radial spotlight */}
      <div
        className="absolute inset-0 mask-radial-fade"
        style={{
          background:
            'radial-gradient(900px circle at 50% 30%, rgba(212, 165, 116, 0.18), transparent 60%)',
        }}
        aria-hidden
      />

      {/* Floating food cards */}
      <FloatingCards scrollProgress={scrollYProgress} />

      {/* Main content */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-cream/70 backdrop-blur"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saffron-300 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-saffron-300" />
          </span>
          <span className="font-jp">{t.hero.badge}</span> · {t.hero.hours}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-display text-[clamp(3.5rem,11vw,11rem)] font-light leading-[0.95] tracking-tight text-cream"
        >
          <SplitWord word="Sambandha" delay={0.5} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 font-jp text-base font-light text-saffron-300/90 md:text-lg"
        >
          {t.hero.jpName}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-balance font-jp text-base font-light leading-relaxed text-cream/70 md:text-lg"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton href="tel:0480442323" strength={0.3}>
            <span className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-saffron-300 px-8 py-3.5 font-jp text-sm font-semibold text-ink transition hover:bg-saffron-200">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">{t.hero.bookNow}</span>
            </span>
          </MagneticButton>

          <MagneticButton href="#reservations" strength={0.3}>
            <span className="inline-flex items-center gap-2 rounded-full border border-saffron-300/40 bg-saffron-300/10 px-8 py-3.5 font-jp text-sm font-medium text-cream backdrop-blur transition hover:border-saffron-300/60 hover:bg-saffron-300/20">
              {t.hero.reserveForm}
            </span>
          </MagneticButton>

          <MagneticButton href="/menu/lunch" strength={0.25}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-3.5 font-jp text-sm font-medium text-cream backdrop-blur transition hover:border-white/30 hover:bg-white/[0.06]">
              {t.hero.lunchMenu}
            </span>
          </MagneticButton>
        </motion.div>

        {/* Rating row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-12 flex items-center gap-6 text-xs text-cream/40"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-3 w-3 fill-saffron-300 text-saffron-300"
              />
            ))}
            <span className="ml-2 font-jp text-cream/60">{t.hero.rating}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.3 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-cream/40"
        >
          <span className="font-jp">{t.hero.scroll}</span>
          <ArrowDown className="h-3 w-3" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent"
        aria-hidden
      />

      {/* Floating scale background */}
      <motion.div
        style={{ scale }}
        className="pointer-events-none absolute inset-0 -z-10 bg-animated-gradient"
        aria-hidden
      />
    </section>
  );
}

function SplitWord({ word, delay = 0 }: { word: string; delay?: number }) {
  return (
    <span className="inline-block" aria-label={word}>
      {word.split('').map((letter, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{
            duration: 0.95,
            delay: delay + i * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          aria-hidden
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}

function FloatingCards({
  scrollProgress,
}: {
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const y1 = useTransform(scrollProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, -160]);
  const y3 = useTransform(scrollProgress, [0, 1], [0, -240]);
  const r1 = useTransform(scrollProgress, [0, 1], [-6, -12]);
  const r2 = useTransform(scrollProgress, [0, 1], [4, 10]);
  const r3 = useTransform(scrollProgress, [0, 1], [-3, -8]);

  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
      <motion.div
        style={{ y: y1, rotate: r1 }}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[4%] top-[18%] h-44 w-32 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 lg:h-56 lg:w-40"
      >
        <img
          src={FOOD_IMAGES[0]}
          alt="サンバンダ名物の巨大ナン"
          className="h-full w-full object-cover"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=900&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: y2, rotate: r2 }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[6%] top-[14%] h-48 w-36 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 lg:h-60 lg:w-44"
      >
        <img
          src={FOOD_IMAGES[1]}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: y3, rotate: r3 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[12%] bottom-[14%] hidden h-40 w-32 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 lg:block lg:h-52 lg:w-40"
      >
        <img
          src={FOOD_IMAGES[2]}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
      </motion.div>
    </div>
  );
}
