'use client';

import { motion } from 'framer-motion';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import { useLang } from '@/lib/i18n';
import { SwipeHome } from '@/components/layout/SwipeHome';

interface LunchSet {
  name: string;
  nameJp: string;
  price: string;
  tax: string;
  description: string;
  descriptionEn: string;
  flagship: boolean;
}

const LUNCH_SETS: LunchSet[] = [
  {
    name: 'Classic Set',
    nameJp: 'クラシックセット',
    price: '¥900',
    tax: '税込 ¥990',
    description: '毎日のお気に入り。スパイスの香り高い本格カレーと、焼き立てのナン。',
    descriptionEn: 'An everyday favorite — fragrant authentic curry and fresh-baked naan.',
    flagship: false,
  },
  {
    name: 'Premium Set',
    nameJp: 'プレミアムセット',
    price: '¥1,200',
    tax: '税込 ¥1,320',
    description: '2種のカレーと、タンドーリチキン。本場の味わいを一皿で。',
    descriptionEn: 'Two curries and tandoori chicken — authentic flavors on one plate.',
    flagship: false,
  },
  {
    name: 'Tandoori Set',
    nameJp: 'タンドリーセット',
    price: '¥1,400',
    tax: '税込 ¥1,540',
    description: 'タンドール窯で焼いた、香ばしいタンドーリチキンが主役。',
    descriptionEn: 'Charred tandoori chicken from the clay oven takes center stage.',
    flagship: false,
  },
  {
    name: 'Sambandha Set',
    nameJp: 'サンバンダセット',
    price: '¥1,580',
    tax: '税込 ¥1,738',
    description: '当店の旗艦メニュー。シェフおすすめの6種の料理と2種のカレー。最高のひとときを。',
    descriptionEn: 'Our flagship menu — 6 chef-selected dishes and 2 curries. A complete experience.',
    flagship: true,
  },
];

function LunchSetCard({ set, index }: { set: LunchSet; index: number }) {
  const { lang } = useLang();
  const flagshipBadge = lang === 'ja' ? '人気 · シェフおすすめ' : 'Popular · Chef\'s Pick';
  const hoursLabel = lang === 'ja' ? '毎日 11:00〜15:00' : 'Daily 11:00 — 15:00';
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
          {flagshipBadge}
        </div>
      )}
      <h3 className="font-jp text-3xl font-light text-cream">{lang === 'ja' ? set.nameJp : set.name}</h3>
      <p className="mt-1 text-sm text-cream/40">{lang === 'ja' ? set.name : set.nameJp}</p>

      <p className="mt-4 font-jp text-sm leading-relaxed text-cream/70">
        {lang === 'ja' ? set.description : set.descriptionEn}
      </p>

      <div className="mt-6 flex items-baseline justify-between border-t border-white/[0.06] pt-6">
        <div>
          <p className="font-display text-4xl font-light text-saffron-300">
            {set.price}
          </p>
          <p className="font-jp text-xs text-cream/40">{set.tax}</p>
        </div>
        <p className="font-jp text-xs text-cream/50">{hoursLabel}</p>
      </div>
    </motion.div>
  );
}

export default function LunchMenuPage() {
  const { lang } = useLang();
  const labels = lang === 'ja' ? {
    eyebrow: 'ランチメニュー',
    title1: '毎日 11:00〜15:00',
    title2: 'ランチサービス',
    intro1: '幸手市で15年以上愛され続ける本格インド料理をお手頃価格で。',
    intro2Pre: '名物の',
    intro2Highlight: '巨大ナン',
    intro2Post: 'と、本場のカレーをお楽しみください。',
    visitTitle: 'ご来店について',
    hoursLabel: '営業時間',
    hoursOpen: '毎日営業',
    hoursTime: '11:00 — 15:00',
    hoursSub: 'ランチタイム',
    reserveLabel: 'ご予約',
    reserveTop: 'ご予約は承っておりますので',
    reserveCall: 'お気軽にお電話ください',
    note: 'ランチセット以外のメニューもご用意しております。詳しくはお店までお問い合わせください。',
    noteEn: 'All lunch sets are available daily from 11:00 to 15:00.',
    pdfEyebrow: '公式メニュー',
    pdfTitle: 'ランチメニュー PDF',
    pdfSubtitle: 'お店のメニューをそのままご覧いただけます',
    pdfOpen: '新しいタブで開く',
    pdfDownload: 'ダウンロード',
    pdfFallback: 'PDFを表示できない場合は、こちらをクリックしてください。',
  } : {
    eyebrow: 'Lunch Menu',
    title1: 'Daily 11:00 — 15:00',
    title2: 'Lunch Service',
    intro1: 'Authentic Indian cuisine, loved in Satte for over 15 years — at lunch prices.',
    intro2Pre: 'Enjoy our signature ',
    intro2Highlight: 'Giant Naan',
    intro2Post: ' and authentic curries.',
    visitTitle: 'Plan Your Visit',
    hoursLabel: 'Hours',
    hoursOpen: 'Open Daily',
    hoursTime: '11:00 — 15:00',
    hoursSub: 'Lunch Service',
    reserveLabel: 'Reservations',
    reserveTop: 'We welcome reservations,',
    reserveCall: 'please give us a call',
    note: 'We also offer dinner and à la carte menus. Contact us for details.',
    noteEn: 'All lunch sets are available daily from 11:00 to 15:00.',
    pdfEyebrow: 'Official Menu',
    pdfTitle: 'Lunch Menu PDF',
    pdfSubtitle: 'View our printed in-store menu',
    pdfOpen: 'Open in new tab',
    pdfDownload: 'Download',
    pdfFallback: 'Can\'t see the PDF? Click here to open it.',
  };

  return (
    <main className="min-h-screen bg-ink">
      <SwipeHome />
      {/* Hero section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="container mx-auto max-w-4xl px-6 relative z-10">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 font-jp text-xs font-medium tracking-[0.25em] text-saffron-300">
              <span className="h-px w-8 bg-saffron-300" />
              {labels.eyebrow}
              <span className="h-px w-8 bg-saffron-300" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-jp text-5xl md:text-6xl font-light leading-[1.1] text-cream mb-6">
              {labels.title1}<br />
              <span className="text-gradient-warm">{labels.title2}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-jp text-lg text-cream/60 max-w-2xl">
              {labels.intro1}<br />
              {labels.intro2Pre}<span className="text-saffron-300">{labels.intro2Highlight}</span>{labels.intro2Post}
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

      {/* PDF menu section */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="container mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="mb-10 text-center">
              <p className="mb-3 inline-flex items-center gap-2 font-jp text-xs font-medium tracking-[0.25em] text-saffron-300">
                <span className="h-px w-8 bg-saffron-300" />
                {labels.pdfEyebrow}
                <span className="h-px w-8 bg-saffron-300" />
              </p>
              <h2 className="font-jp text-3xl md:text-4xl font-light text-cream">
                {labels.pdfTitle}
              </h2>
              <p className="font-jp text-sm text-cream/60 mt-2">
                {labels.pdfSubtitle}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
              <object
                data="/menus/lunch-menu.pdf#view=FitH"
                type="application/pdf"
                className="block h-[80vh] min-h-[600px] w-full"
                aria-label={labels.pdfTitle}
              >
                <div className="flex h-[400px] items-center justify-center p-8 text-center">
                  <a
                    href="/menus/lunch-menu.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="font-jp text-saffron-300 underline"
                  >
                    {labels.pdfFallback}
                  </a>
                </div>
              </object>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/menus/lunch-menu.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-saffron-300 px-6 py-3 font-jp text-sm font-semibold text-ink transition hover:bg-saffron-200"
              >
                {labels.pdfOpen}
              </a>
              <a
                href="/menus/lunch-menu.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 font-jp text-sm font-medium text-cream backdrop-blur transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                {labels.pdfDownload}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Info section */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="container mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="text-center">
              <h2 className="font-jp text-3xl font-light text-cream mb-6">
                {labels.visitTitle}
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
                  <p className="font-jp text-xs font-medium tracking-widest text-saffron-300/80 mb-3">
                    {labels.hoursLabel}
                  </p>
                  <p className="font-jp text-lg text-cream">{labels.hoursOpen}</p>
                  <p className="font-jp text-2xl font-light text-cream mt-2">
                    {labels.hoursTime}
                  </p>
                  <p className="font-jp text-xs text-cream/50 mt-2">
                    {labels.hoursSub}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
                  <p className="font-jp text-xs font-medium tracking-widest text-saffron-300/80 mb-3">
                    {labels.reserveLabel}
                  </p>
                  <p className="font-jp text-cream">
                    {labels.reserveTop}
                  </p>
                  <p className="font-jp text-2xl font-light text-saffron-300 mt-2">
                    {labels.reserveCall}
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
            {labels.note}
          </p>
          <p className="font-jp text-xs text-cream/40 mt-4">
            {labels.noteEn}
          </p>
        </div>
      </section>
    </main>
  );
}
