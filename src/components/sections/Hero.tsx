'use client';

import { Star } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="relative bg-ink">
      <div className="mx-auto grid min-h-[85dvh] max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-32 pb-20 md:pt-40 md:pb-24 lg:grid-cols-12 lg:gap-0">
        {/* Left text */}
        <div className="relative z-10 lg:col-span-6 lg:pr-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-1.5 text-xs font-medium text-cream/80">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saffron-300 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-saffron-300" />
            </span>
            <span className="font-jp">{t.hero.badge}</span>
            <span aria-hidden>·</span>
            <span>{t.hero.hours}</span>
          </div>

          <h1 className="apple-headline font-display">Sambandha</h1>
          <p className="mt-3 font-jp text-base font-light text-saffron-300/90 md:text-lg">
            {t.hero.jpName}
          </p>
          <p className="apple-body mt-6 max-w-md font-jp">{t.hero.tagline}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#reservations"
              className="inline-flex items-center gap-2 rounded-full bg-saffron-300 px-7 py-3.5 font-jp text-sm font-semibold text-ink transition hover:bg-saffron-200"
            >
              {t.hero.reserveForm}
            </a>
            <a
              href="tel:0480442323"
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-7 py-3.5 font-jp text-sm font-medium text-cream transition hover:border-hairline-strong"
            >
              {t.hero.bookNow}
            </a>
            <a
              href="/menu/lunch"
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-7 py-3.5 font-jp text-sm font-medium text-cream transition hover:border-hairline-strong"
            >
              {t.hero.lunchMenu}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-saffron-300 text-saffron-300" />
            ))}
            <span className="ml-2 font-jp text-xs text-cream/50">{t.hero.rating}</span>
          </div>
        </div>

        {/* Right image */}
        <div className="hidden lg:col-span-6 lg:block">
          <div className="relative ml-auto aspect-[4/5] w-[85%] overflow-hidden rounded-3xl border border-hairline">
            <img
              src="/images/naan.jpg"
              alt="サンバンダ名物の巨大ナン"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}