'use client';

import { Marquee } from '@/components/ui/Marquee';

const DISHES = [
  'Butter Chicken',
  'バターチキン',
  'Tandoori Mixed Grill',
  'タンドリーチキン',
  'Sambandha Set',
  'サンバンダセット',
  'Garlic Naan',
  'チーズナン',
  'Mutton Sag',
  'マトンサーグ',
  'Matki Chicken Masala',
  'プローンカレー',
];

export function SignatureMarquee() {
  return (
    <section
      aria-label="Signature dishes"
      className="relative border-y border-white/[0.06] bg-ink py-10 md:py-14"
    >
      <Marquee speed={45}>
        {DISHES.map((dish, i) => (
          <div
            key={`${dish}-${i}`}
            className="flex shrink-0 items-center gap-12 px-6"
          >
            <span className="whitespace-nowrap font-display text-3xl font-light tracking-tight text-cream/90 md:text-5xl">
              {dish}
            </span>
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-300"
              aria-hidden
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
