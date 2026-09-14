'use client';

import { useLang } from '@/lib/i18n';

const MENU_KEYS = ['lunch', 'tandoori', 'naan', 'curry', 'dine'] as const;

export function Menu() {
  const { t } = useLang();
  const m = t.menu;

  return (
    <section id="menu" className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <p className="apple-eyebrow mb-4 text-center">{m.eyebrow}</p>
        <h2 className="apple-subhead text-center font-jp text-cream">
          {m.title1}
          <br />
          {m.title2}
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-center font-jp text-sm text-cream/50">
          {m.description}
        </p>

        <div className="mt-16">
          {MENU_KEYS.map((key, i) => {
            const cat = m[key];
            return (
              <div
                key={key}
                className="flex flex-col gap-2 border-b border-hairline py-8 first:border-t sm:flex-row sm:items-start sm:justify-between sm:gap-6"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-5xl font-light leading-none text-saffron-300/60 sm:text-6xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-jp text-xl font-medium text-cream sm:text-2xl">
                      {cat.label}
                      <span className="ml-2 font-display text-xs uppercase tracking-[0.25em] text-cream/35">
                        {cat.labelEn}
                      </span>
                    </p>
                    <p className="mt-0.5 font-jp text-sm text-cream/60">{cat.desc}</p>
                  </div>
                </div>
                <p className="shrink-0 font-jp text-base font-medium text-saffron-300 sm:text-right">
                  {cat.title}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/menu/lunch"
            className="inline-flex items-center gap-2 rounded-full border border-hairline px-7 py-3 font-jp text-sm font-medium text-cream transition hover:border-hairline-strong hover:text-saffron-300"
          >
            {t.nav.lunch} →
          </a>
        </div>
      </div>
    </section>
  );
}