'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Star } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { useLang } from '@/lib/i18n';

const FOOD_IMAGES = [
  '/images/naan.jpg',
  '/images/hero-spread.jpg',
  '/images/butter-chicken.jpg',
];

const SPRING = { type: 'spring', stiffness: 100, damping: 20 } as const;
const SPRING_FAST = { type: 'spring', stiffness: 140, damping: 22 } as const;

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
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate min-h-[100dvh] w-full overflow-hidden bg-ink"
    >
      {/* Grid backdrop */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 grid-lines opacity-50"
        aria-hidden
      />

      {/* Radial spotlight — left-biased to match asymmetric layout */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(700px circle at 30% 40%, rgba(212, 165, 116, 0.15), transparent 60%)',
        }}
        aria-hidden
      />

      {/* Asymmetric two-column layout */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 mx-auto grid min-h-[100dvh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-28 md:grid-cols-2 md:gap-0 md:py-0"
      >
        {/* LEFT — text column */}
        <div className="flex flex-col">
          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: 0.2 }}
            className="glass-card-light mb-8 inline-flex w-fit items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-wide text-cream/70"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saffron-300 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-saffron-300" />
            </span>
            <span className="font-jp">{t.hero.badge}</span> · {t.hero.hours}
          </motion.div>

          {/* Main heading — left-aligned */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.95] tracking-tight text-cream"
          >
            <SplitWord word="Sambandha" delay={0.4} />
          </motion.h1>

          {/* Japanese name */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: 1.3 }}
            className="mt-3 font-jp text-base font-light text-saffron-300/90 md:text-lg"
          >
            {t.hero.jpName}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: 1.45 }}
            className="mt-6 max-w-sm font-jp text-base font-light leading-relaxed text-cream/60 md:text-lg"
          >
            {t.hero.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: 1.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <MagneticButton href="tel:0480442323" strength={0.3}>
              <span className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-saffron-300 px-7 py-3.5 font-jp text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-saffron-200 active:translate-y-[1px] active:shadow-none">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">{t.hero.bookNow}</span>
              </span>
            </MagneticButton>

            <MagneticButton href="#reservations" strength={0.3}>
              <span className="glass-card-medium inline-flex items-center gap-2 px-7 py-3.5 font-jp text-sm font-medium text-cream transition-all duration-200 hover:-translate-y-0.5 active:translate-y-[1px]">
                {t.hero.reserveForm}
              </span>
            </MagneticButton>

            <MagneticButton href="/menu/lunch" strength={0.25}>
              <span className="glass-card-light inline-flex items-center gap-2 px-7 py-3.5 font-jp text-sm font-medium text-cream transition-all duration-200 hover:-translate-y-0.5 active:translate-y-[1px]">
                {t.hero.lunchMenu}
              </span>
            </MagneticButton>
          </motion.div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.9 }}
            className="mt-10 flex items-center gap-1"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-saffron-300 text-saffron-300" />
            ))}
            <span className="ml-2 font-jp text-xs text-cream/50">{t.hero.rating}</span>
          </motion.div>
        </div>

        {/* RIGHT — stacked food photos */}
        <div className="relative hidden md:flex md:items-center md:justify-end">
          <motion.div
            style={{ y: imgY }}
            className="relative h-[520px] w-[340px] lg:h-[580px] lg:w-[380px]"
          >
            {/* Back card */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 6 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ ...SPRING_FAST, delay: 1.0 }}
              className="absolute right-0 top-6 h-[340px] w-[230px] overflow-hidden rounded-3xl border border-white/15 lg:h-[380px] lg:w-[260px]"
              style={{ boxShadow: '0 20px 60px rgba(10,8,7,0.5)' }}
            >
              <img src={FOOD_IMAGES[2]} alt="" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            </motion.div>

            {/* Middle card */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -4 }}
              animate={{ opacity: 1, x: 0, rotate: -4 }}
              transition={{ ...SPRING_FAST, delay: 1.15 }}
              className="absolute bottom-4 left-0 h-[300px] w-[200px] overflow-hidden rounded-3xl border border-white/15 lg:h-[340px] lg:w-[230px]"
              style={{ boxShadow: '0 20px 60px rgba(10,8,7,0.5)' }}
            >
              <img src={FOOD_IMAGES[1]} alt="" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            </motion.div>

            {/* Front card — dominant */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_FAST, delay: 1.3 }}
              className="absolute left-8 top-0 h-[420px] w-[260px] overflow-hidden rounded-3xl border border-white/20 lg:h-[470px] lg:w-[300px]"
              style={{ boxShadow: '0 32px 80px rgba(10,8,7,0.6)' }}
            >
              <img
                src={FOOD_IMAGES[0]}
                alt="サンバンダ名物の巨大ナン"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="absolute bottom-8 left-8 z-10 md:left-1/2 md:-translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-cream/30"
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
            type: 'spring',
            stiffness: 120,
            damping: 20,
            delay: delay + i * 0.05,
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
