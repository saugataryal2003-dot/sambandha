'use client';

import { useLang } from '@/lib/i18n';

const PILLAR_KEYS = ['spices', 'chefs', 'hospitality', 'fresh'] as const;

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="bg-ink py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-6 lg:grid-cols-12 lg:gap-20">
        {/* Left image */}
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-hairline">
            <img
              src="/images/naan.jpg"
              alt={t.about.naanBadge}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-4 flex items-baseline gap-4">
            <p className="apple-headline font-display text-saffron-300">15+</p>
            <p className="font-jp text-xs tracking-wide text-cream/50">{t.about.yearsLabel}</p>
          </div>
        </div>

        {/* Right content */}
        <div className="lg:col-span-7">
          <p className="apple-eyebrow mb-4">{t.about.eyebrow}</p>
          <h2 className="apple-subhead font-jp text-cream">
            {t.about.title1}
            <br />
            {t.about.title2}
          </h2>
          <p className="mt-8 font-jp text-base leading-relaxed text-cream/70 md:text-lg">
            <span className="text-saffron-300">{t.about.p1Prefix}</span>
            {t.about.p1}
          </p>
          <p className="mt-5 font-jp text-base leading-relaxed text-cream/70 md:text-lg">
            {t.about.p2}
          </p>

          {/* Pillars */}
          <div className="mt-12 divide-y divide-hairline">
            {PILLAR_KEYS.map((key) => {
              const pillar = t.about.pillars[key];
              return (
                <div key={key} className="py-6 first:pt-0 last:pb-0">
                  <h3 className="font-jp text-xl font-medium text-cream">{pillar.title}</h3>
                  <p className="mt-0.5 text-[11px] uppercase tracking-wider text-cream/40">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-2 font-jp text-sm leading-relaxed text-cream/60">
                    {pillar.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}