'use client';

import { motion } from 'framer-motion';
import { Reveal, RevealText } from '@/components/ui/Reveal';

interface LunchSet {
  name: string;
  nameJp: string;
  price: string;
  tax: string;
  description: string;
  flagship: boolean;
}

const LUNCH_SETS: LunchSet[] = [
  {
    name: 'Classic Set',
    nameJp: 'クラシックセット',
    price: '¥900',
    tax: '税込 ¥990',
    description: '毎日のお気に入り。スパイスの香り高い本格カレーと、焼き立てのナン。',
    flagship: false,
  },
  {
    name: 'Premium Set',
    nameJp: 'プレミアムセット',
    price: '¥1,200',
    tax: '税込 ¥1,320',
    description: '2種のカレーと、タンドーリチキン。本場の味わいを一皿で。',
    flagship: false,
  },
  {
    name: 'Tandoori Set',
    nameJp: 'タンドリーセット',
    price: '¥1,400',
    tax: '税込 ¥1,540',
    description: 'タンドール窯で焼いた、香ばしいタンドーリチキンが主役。',
    flagship: false,
  },
  {
    name: 'Sambandha Set',
    nameJp: 'サンバンダセット',
    price: '¥1,580',
    tax: '税込 ¥1,738',
    description: '当店の旗艦メニュー。シェフおすすめの6種の料理と2種のカレー。最高のひとときを。',
    flagship: true,
  },
];

function LunchSetCard({ set, index }: { set: LunchSet; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-2xl border p-8 transition-all ${
        set.flagship
          ? 'border-saffron-300/40 bg-gradient-to-br from-saffron-500/10 to-transparent hover:border-saffron-300/60 hover:shadow-lg hover:shadow-saffron-500/20'
          : 'border-white/[0.08] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
      }`}
    >
      {set.flagship && (
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-saffron-300/20 px-3 py-1 font-jp text-xs font-semibold tracking-wider text-saffron-200">
          <span className="h-1.5 w-1.5 rounded-full bg-saffron-200" />
          人気 · シェフおすすめ
        </div>
      )}
      <h3 className="font-jp text-3xl font-light text-cream">{set.nameJp}</h3>
      <p className="mt-1 text-sm text-cream/40">{set.name}</p>

      <p className="mt-4 font-jp text-sm leading-relaxed text-cream/70">
        {set.description}
      </p>

      <div className="mt-6 flex items-baseline justify-between border-t border-white/[0.06] pt-6">
        <div>
          <p className="font-display text-4xl font-light text-saffron-300">
            {set.price}
          </p>
          <p className="font-jp text-xs text-cream/40">{set.tax}</p>
        </div>
        <p className="font-jp text-xs text-cream/50">毎日 11:00〜17:00</p>
      </div>
    </motion.div>
  );
}

export default function LunchMenuPage() {
  return (
    <main className="min-h-screen bg-ink">
      {/* Hero section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="container mx-auto max-w-4xl px-6 relative z-10">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 font-jp text-xs font-medium tracking-[0.25em] text-saffron-300">
              <span className="h-px w-8 bg-saffron-300" />
              ランチメニュー
              <span className="h-px w-8 bg-saffron-300" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-jp text-5xl md:text-6xl font-light leading-[1.1] text-cream mb-6">
              毎日 11:00〜17:00<span className="text-gradient-warm">ランチサービス</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-jp text-lg text-cream/60 max-w-2xl">
              本格インド料理をお手頃価格で。厳選されたスパイスと、丁寧に作られた料理で、特別なランチタイムをお過ごしください。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Lunch sets grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {LUNCH_SETS.map((set, i) => (
              <LunchSetCard key={set.nameJp} set={set} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Info section */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="container mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="text-center">
              <h2 className="font-jp text-3xl font-light text-cream mb-6">
                ご来店について
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
                  <p className="font-jp text-xs font-medium tracking-widest text-saffron-300/80 mb-3">
                    営業時間
                  </p>
                  <p className="font-jp text-lg text-cream">月 — 日</p>
                  <p className="font-jp text-2xl font-light text-cream mt-2">
                    11:00 — 17:00
                  </p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
                  <p className="font-jp text-xs font-medium tracking-widest text-saffron-300/80 mb-3">
                    ご予約
                  </p>
                  <p className="font-jp text-cream">
                    ご予約は承っておりますので
                  </p>
                  <p className="font-jp text-2xl font-light text-saffron-300 mt-2">
                    お気軽にお電話ください
                  </p>
                  <p className="font-jp text-lg text-cream mt-4">
                    0480-44-2323
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer note */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <p className="font-jp text-sm text-cream/50">
            ランチセット以外のメニューもご用意しております。詳しくはお店までお問い合わせください。
          </p>
          <p className="font-jp text-xs text-cream/40 mt-4">
            All lunch sets are available daily from 11:00 to 17:00.
          </p>
        </div>
      </section>
    </main>
  );
}
