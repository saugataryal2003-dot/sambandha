'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Phone } from 'lucide-react';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { RESTAURANT } from '@/lib/utils';

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
    price: '¥1,400',
    tax: '税込 ¥1,540',
    flagship: false,
  },
  {
    name: 'Sambandha Set',
    nameJp: 'サンバンダセット',
    price: '¥1,580',
    tax: '税込 ¥1,738',
    flagship: true,
  },
];

const SIGNATURE_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&q=80',
  lunch: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=900&q=80',
  tandoori: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=900&q=80',
  naan: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900&q=80',
  curry: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=900&q=80',
};

export function Menu() {
  return (
    <section id="menu" className="relative overflow-hidden bg-ink py-24 md:py-36">
      {/* Background accents */}
      <div className="pointer-events-none absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-saffron-500/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-32 h-[400px] w-[400px] rounded-full bg-flame/[0.05] blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6 md:mb-24">
          <div>
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-saffron-300">
                <span className="h-px w-8 bg-saffron-300" />
                The Menu
              </p>
            </Reveal>
            <h2 className="font-display text-5xl font-light leading-[0.95] text-cream md:text-7xl lg:text-8xl">
              <RevealText>Crafted dishes,</RevealText>
              <br />
              <RevealText delay={0.15} className="text-gradient-warm italic">
                shared moments.
              </RevealText>
            </h2>
          </div>
          <Reveal delay={0.4} className="max-w-md">
            <p className="text-base leading-relaxed text-cream/60 md:text-lg">
              Every set is a journey. From the daily Classic to the flagship
              Sambandha experience — six courses, two curries, one unforgettable meal.
            </p>
          </Reveal>
        </div>

        {/* Bento grid */}
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4 md:gap-4 lg:auto-rows-[220px] lg:grid-cols-6">
          {/* Featured Lunch — large */}
          <BentoCard
            className="col-span-2 row-span-2 md:col-span-2 md:row-span-2 lg:col-span-3 lg:row-span-2"
            image={SIGNATURE_IMAGES.hero}
            label="Lunch Menu"
            labelJp="ランチ"
            title="From ¥900"
            href="/menus/lunch-menu.pdf"
            external
            description="Four curated sets · open PDF"
            priority
          />

          {/* Tandoori */}
          <BentoCard
            className="col-span-2 row-span-1 md:col-span-2 lg:col-span-3"
            image={SIGNATURE_IMAGES.tandoori}
            label="Tandoori"
            labelJp="タンドーリ"
            title="Clay oven, charred to gold"
          />

          {/* Naan */}
          <BentoCard
            className="col-span-1 row-span-1 md:col-span-2 lg:col-span-2"
            image={SIGNATURE_IMAGES.naan}
            label="Breads"
            labelJp="ナン"
            title="9 varieties"
            small
          />

          {/* Curry */}
          <BentoCard
            className="col-span-1 row-span-1 lg:col-span-1"
            image={SIGNATURE_IMAGES.curry}
            label="Curries"
            labelJp="カレー"
            title="40+"
            small
          />
        </div>

        {/* Lunch sets grid */}
        <div className="mt-20 grid gap-3 md:mt-28 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
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
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-colors md:p-8 ${
                set.flagship
                  ? 'border-saffron-300/30 bg-gradient-to-br from-saffron-500/10 to-transparent hover:border-saffron-300/60'
                  : 'border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              {set.flagship && (
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-saffron-300/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-saffron-200">
                  <span className="h-1 w-1 rounded-full bg-saffron-200" />
                  Flagship
                </div>
              )}
              <p className="font-jp text-xs text-cream/50">{set.nameJp}</p>
              <h3 className="mt-2 font-display text-3xl font-light text-cream md:text-4xl">
                {set.name}
              </h3>
              <div className="mt-8 flex items-end justify-between">
                <div>
                  <p className="font-display text-4xl font-light text-gradient-warm md:text-5xl">
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
        <Reveal className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 md:flex-row md:p-10">
          <div>
            <p className="font-jp text-2xl font-light text-cream md:text-3xl">
              本格インド料理と共に、世界の味わいを
            </p>
            <p className="mt-2 font-jp text-sm text-cream/60">
              豊富なドリンクメニューをご用意しています。団体様や特別なご要望はお電話にてご相談ください。
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
                ドリンクメニュー
=======
            <MagneticButton href="/menu/drinks">
              <span className="group inline-flex items-center gap-2 rounded-full bg-saffron-300 px-6 py-3 font-jp text-sm font-semibold text-ink transition hover:bg-saffron-200">
                ドリンクメニュー
                <ExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
            </MagneticButton>
            <MagneticButton href="/menus/lunch-menu.pdf">
              <span className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-cream backdrop-blur transition hover:border-white/30 hover:bg-white/[0.06]">
                ランチメニュー
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
  labelJp: string;
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
  labelJp,
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
        className={`group relative block overflow-hidden rounded-2xl border border-white/[0.08] ${className}`}
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
        alt=""
        loading={priority ? 'eager' : 'lazy'}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div
        className={`absolute inset-0 flex flex-col justify-between ${
          small ? 'p-4' : 'p-6 md:p-8'
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-saffron-300">
            {label}
          </p>
          {href && (
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-cream backdrop-blur transition group-hover:border-saffron-300/60 group-hover:bg-saffron-300/20">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          )}
        </div>
        <div>
          <p className="font-jp text-xs text-cream/50">{labelJp}</p>
          <h3
            className={`mt-1 font-display font-light leading-tight text-cream ${
              small ? 'text-xl md:text-2xl' : 'text-2xl md:text-4xl lg:text-5xl'
            }`}
          >
            {title}
          </h3>
          {description && (
            <p className="mt-2 text-xs text-cream/60 md:text-sm">{description}</p>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
