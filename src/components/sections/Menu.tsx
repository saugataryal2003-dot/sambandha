'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Phone } from 'lucide-react';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { RESTAURANT } from '@/lib/utils';
import { useLang } from '@/lib/i18n';

const LUNCH_SETS = [
  {
    name: 'Classic Set',
    nameJp: 'クラシックセット',
    price: '¥900',
    tax: '税込 ¥990',
    flagship: false,
  },
  {
    name: 'Premium Set',
    nameJp: 'プレミアムセット',
    price: '¥1,200',
    tax: '税込 ¥1,320',
    flagship: false,
  },
  {
    name: 'Tandoori Set',
    nameJp: 'タンドリーセット',
    price: '¥1,580',
    tax: '税込 ¥1,738',
    flagship: false,
  },
  {
    name: 'Sambandha Set',
    nameJp: 'サンバンダセット',
    price: '¥1,680',
    tax: '税込 ¥1,848',
    flagship: true,
  },
];

const SIGNATURE_IMAGES = {
  hero: '/images/hero-spread.jpg',
  lunch: '/images/hero-spread.jpg',
  tandoori: '/images/tandoori-chicken.jpg',
  naan: '/images/naan.jpg',
  curry: '/images/butter-chicken.jpg',
  dessert: '/images/IMG_2356.jpeg',
};

export function Menu() {
  const { t, lang } = useLang();
  const lunchLabel = lang === 'ja' ? 'ランチセット' : 'Lunch Sets';
  const lunchHours = lang === 'ja' ? '毎日 11:00 — 15:00 でご提供' : 'Available daily 11:00 — 15:00';
  const flagshipBadge = lang === 'ja' ? '人気' : 'Popular';
  const ctaTitle = lang === 'ja' ? '本格インド料理と共に、世界の味わいを' : 'Authentic Indian cuisine, flavors of the world';
  const ctaDesc = lang === 'ja'
    ? '豊富なドリンクメニューをご用意しています。団体様や特別なご要望はお電話にてご相談ください。'
    : 'A wide variety of drinks available. For groups or special requests, please call us.';
  const drinksLabel = lang === 'ja' ? 'ドリンクメニュー' : 'Drinks Menu';
  const lunchPdfLabel = lang === 'ja' ? 'ランチメニュー' : 'Lunch Menu (PDF)';
  const dessertLabel = lang === 'ja' ? 'デザートメニュー' : 'Dessert Menu';

  return (
    <section id="menu" className="relative overflow-hidden bg-ink py-36">
      {/* Background accents */}
      <div className="pointer-events-none absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-saffron-500/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-32 h-[400px] w-[400px] rounded-full bg-flame/[0.05] blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="mb-24 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 font-jp text-xs font-medium tracking-[0.25em] text-saffron-300">
                <span className="h-px w-8 bg-saffron-300" />
                {t.menu.eyebrow}
              </p>
            </Reveal>
            <h2 className="font-jp text-5xl font-light leading-[1.2] text-cream lg:text-6xl">
              <RevealText>{t.menu.title1}</RevealText>
              <br />
              <RevealText delay={0.15} className="text-gradient-warm">
                {t.menu.title2}
              </RevealText>
            </h2>
          </div>
          <Reveal delay={0.4} className="max-w-md">
            <p className="font-jp text-lg leading-relaxed text-cream/60">
              {t.menu.description}
            </p>
          </Reveal>
        </div>

        {/* Bento grid */}
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-6">
          {/* Featured Lunch — large */}
          <BentoCard
            className="col-span-2 row-span-2 md:col-span-2 md:row-span-2 lg:col-span-3 lg:row-span-2"
            image={SIGNATURE_IMAGES.hero}
            label={t.menu.lunch.label}
            labelEn={t.menu.lunch.labelEn}
            title={t.menu.lunch.title}
            href="/menus/lunch-menu.pdf"
            external
            description={t.menu.lunch.desc}
            priority
          />

          {/* Tandoori */}
          <BentoCard
            className="col-span-2 row-span-1 md:col-span-2 lg:col-span-3"
            image={SIGNATURE_IMAGES.tandoori}
            label={t.menu.tandoori.label}
            labelEn={t.menu.tandoori.labelEn}
            title={t.menu.tandoori.title}
          />

          {/* Naan */}
          <BentoCard
            className="col-span-1 row-span-1 md:col-span-2 lg:col-span-2"
            image={SIGNATURE_IMAGES.naan}
            label={t.menu.naan.label}
            labelEn={t.menu.naan.labelEn}
            title={t.menu.naan.title}
            small
          />

          {/* Curry */}
          <BentoCard
            className="col-span-1 row-span-1 lg:col-span-1"
            image={SIGNATURE_IMAGES.curry}
            label={t.menu.curry.label}
            labelEn={t.menu.curry.labelEn}
            title={t.menu.curry.title}
            small
          />

          {/* Dessert — Chocolate Cheese Naan */}
          <BentoCard
            className="col-span-2 row-span-1 md:col-span-4 lg:col-span-6"
            image={SIGNATURE_IMAGES.dessert}
            label={lang === 'ja' ? 'デザート · NEW' : 'Dessert · NEW'}
            labelEn={lang === 'ja' ? 'Dessert' : 'デザート'}
            title={lang === 'ja' ? 'チョコレートチーズナン' : 'Chocolate Cheese Naan'}
            description={lang === 'ja' ? '新登場！チョコとチーズの絶妙な組み合わせ。' : 'New! A perfect blend of chocolate and cheese in fresh naan.'}
            href="/menu/dessert"
          />
        </div>

        {/* Lunch Menu Section */}
        <div className="mt-28">
          <Reveal>
            <div className="mb-12 text-center">
              <p className="mb-3 inline-flex items-center gap-2 font-jp text-xs font-medium tracking-[0.25em] text-saffron-300">
                <span className="h-px w-8 bg-saffron-300" />
                {t.menu.lunch.label}
                <span className="h-px w-8 bg-saffron-300" />
              </p>
              <h3 className="font-jp text-4xl font-light text-cream">
                {lunchLabel}
              </h3>
              <p className="font-jp text-base text-cream/60 mt-2">
                {lunchHours}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Lunch sets grid */}
        <div className="grid gap-4 lg:grid-cols-4">
          {LUNCH_SETS.map((set, i) => (
            <motion.div
              key={set.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-2xl border p-8 transition-colors ${
                set.flagship
                  ? 'border-saffron-300/30 bg-gradient-to-br from-saffron-500/10 to-transparent hover:border-saffron-300/60'
                  : 'border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              {set.flagship && (
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-saffron-300/20 px-2.5 py-1 font-jp text-[10px] font-semibold tracking-wider text-saffron-200">
                  <span className="h-1 w-1 rounded-full bg-saffron-200" />
                  {flagshipBadge}
                </div>
              )}
              <p className="text-xs uppercase tracking-wider text-cream/50">{set.name}</p>
              <h3 className="mt-2 font-jp text-3xl font-light text-cream">
                {lang === 'ja' ? set.nameJp : set.name}
              </h3>
              <div className="mt-8 flex items-end justify-between">
                <div>
                  <p className="font-display text-5xl font-light text-gradient-warm">
                    {set.price}
                  </p>
                  <p className="mt-1 text-xs text-cream/40">{set.tax}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-cream/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-saffron-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <Reveal className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-10 lg:flex-row">
          <div>
            <p className="font-jp text-3xl font-light text-cream">
              {ctaTitle}
            </p>
            <p className="mt-2 font-jp text-sm text-cream/60">
              {ctaDesc}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <MagneticButton href={`tel:${RESTAURANT.phoneRaw}`}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-cream backdrop-blur transition hover:border-white/30 hover:bg-white/[0.06]">
                <Phone className="h-4 w-4" />
                {RESTAURANT.phone}
              </span>
            </MagneticButton>
            <MagneticButton href="/menu/drinks">
              <span className="group inline-flex items-center gap-2 rounded-full bg-saffron-300 px-6 py-3 font-jp text-sm font-semibold text-ink transition hover:bg-saffron-200">
                {drinksLabel}
                <ExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
            </MagneticButton>
            <MagneticButton href="/menus/lunch-menu.pdf">
              <span className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-cream backdrop-blur transition hover:border-white/30 hover:bg-white/[0.06]">
                {lunchPdfLabel}
                <ExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
            </MagneticButton>
            <MagneticButton href="/menu/dessert">
              <span className="group inline-flex items-center gap-2 rounded-full border border-saffron-300/40 bg-saffron-300/5 px-6 py-3 font-jp text-sm font-medium text-saffron-300 transition hover:border-saffron-300/60 hover:bg-saffron-300/10">
                {dessertLabel}
                <ExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

interface BentoCardProps {
  className: string;
  image: string;
  label: string;
  labelEn: string;
  title: string;
  description?: string;
  href?: string;
  external?: boolean;
  small?: boolean;
  priority?: boolean;
}

function BentoCard({
  className,
  image,
  label,
  labelEn,
  title,
  description,
  href,
  external,
  small,
  priority,
}: BentoCardProps) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    href ? (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className={`group relative block overflow-hidden rounded-3xl border border-white/[0.12] shadow-ios-md transition-all duration-300 hover:shadow-ios-lg hover:-translate-y-1 ${className}`}
      >
        {children}
      </a>
    ) : (
      <div
        className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] ${className}`}
      >
        {children}
      </div>
    );

  return (
    <Wrapper>
      <motion.img
        src={image}
        alt={title}
        loading={priority ? 'eager' : 'lazy'}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div
        className={`absolute inset-0 flex flex-col justify-between ${
          small ? 'p-5' : 'p-8'
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="font-jp text-xs font-medium tracking-[0.2em] text-saffron-300">
            {label}
          </p>
          {href && (
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-cream backdrop-blur transition group-hover:border-saffron-300/60 group-hover:bg-saffron-300/20">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          )}
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-cream/50">{labelEn}</p>
          <h3
            className={`mt-1 font-jp font-light leading-tight text-cream ${
              small ? 'text-2xl' : 'text-3xl lg:text-4xl'
            }`}
          >
            {title}
          </h3>
          {description && (
            <p className="mt-2 font-jp text-sm text-cream/60">{description}</p>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
