'use client';

import { useLang } from '@/lib/i18n';
import { RESTAURANT } from '@/lib/utils';

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
    price: '¥1,580',
    tax: '税込 ¥1,738',
    description: 'タンドール窯で焼いた、香ばしいタンドーリチキンが主役。',
    descriptionEn: 'Charred tandoori chicken from the clay oven takes center stage.',
    flagship: false,
  },
  {
    name: 'Sambandha Set',
    nameJp: 'サンバンダセット',
    price: '¥1,680',
    tax: '税込 ¥1,848',
    description: '当店の旗艦メニュー。シェフおすすめの6種の料理と2種のカレー。最高のひとときを。',
    descriptionEn: 'Our flagship menu — 6 chef-selected dishes and 2 curries. A complete experience.',
    flagship: true,
  },
];

function LunchSetCard({ set }: { set: LunchSet }) {
  const { lang } = useLang();
  const flagshipBadge = lang === 'ja' ? '人気 · シェフおすすめ' : "Popular · Chef's Pick";
  const hoursLabel = lang === 'ja' ? '毎日 11:00〜15:00' : 'Daily 11:00 — 15:00';

  return (
    <div
      className={`rounded-2xl border p-8 transition-colors ${
        set.flagship
          ? 'border-saffron-300/50 bg-saffron-300/[0.06]'
          : 'border-hairline bg-apple-card hover:border-hairline-strong'
      }`}
    >
      {set.flagship && (
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-saffron-300/20 px-3 py-1 font-jp text-xs font-semibold tracking-wider text-saffron-300">
          <span className="h-1.5 w-1.5 rounded-full bg-saffron-300" />
          {flagshipBadge}
        </div>
      )}
      <h3 className="font-jp text-2xl font-light text-cream">{lang === 'ja' ? set.nameJp : set.name}</h3>
      <p className="mt-1 text-xs text-cream/40">{lang === 'ja' ? set.name : set.nameJp}</p>

      <p className="mt-4 font-jp text-sm leading-relaxed text-cream/70">
        {lang === 'ja' ? set.description : set.descriptionEn}
      </p>

      <div className="mt-6 flex items-baseline justify-between border-t border-hairline pt-6">
        <div>
          <p className="font-display text-4xl font-light text-saffron-300">{set.price}</p>
          <p className="font-jp text-xs text-cream/40">{set.tax}</p>
        </div>
        <p className="font-jp text-xs text-cream/50">{hoursLabel}</p>
      </div>
    </div>
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
    pdfFallback: "Can't see the PDF? Click here to open it.",
  };

  return (
    <div className="min-h-screen bg-ink">
      {/* Hero section */}
      <section className="px-6 pb-8 pt-36 md:pt-44">
        <div className="mx-auto max-w-4xl">
          <p className="apple-eyebrow mb-4">{labels.eyebrow}</p>
          <h1 className="font-jp text-4xl font-light leading-tight text-cream md:text-6xl">
            {labels.title1}
            <br />
            {labels.title2}
          </h1>
          <p className="mt-6 max-w-2xl font-jp text-lg text-cream/60">
            {labels.intro1}
            <br />
            {labels.intro2Pre}
            <span className="text-saffron-300">{labels.intro2Highlight}</span>
            {labels.intro2Post}
          </p>
        </div>
      </section>

      {/* Lunch sets grid */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {LUNCH_SETS.map((set) => (
              <LunchSetCard key={set.nameJp} set={set} />
            ))}
          </div>
        </div>
      </section>

      {/* PDF menu section */}
      <section className="border-t border-hairline px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="apple-eyebrow mb-3">{labels.pdfEyebrow}</p>
            <h2 className="font-jp text-3xl font-light text-cream md:text-4xl">
              {labels.pdfTitle}
            </h2>
            <p className="mt-2 font-jp text-sm text-cream/60">{labels.pdfSubtitle}</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-hairline">
            <object
              data="/menus/lunch-menu.pdf?v=2#view=FitH"
              type="application/pdf"
              className="block h-[80vh] min-h-[600px] w-full"
              aria-label={labels.pdfTitle}
            >
              <div className="flex h-[400px] items-center justify-center p-8 text-center">
                <a
                  href="/menus/lunch-menu.pdf?v=2"
                  target="_blank"
                  rel="noreferrer"
                  className="font-jp text-saffron-300 underline"
                >
                  {labels.pdfFallback}
                </a>
              </div>
            </object>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/menus/lunch-menu.pdf?v=2"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-saffron-300 px-6 py-3 font-jp text-sm font-semibold text-ink transition hover:bg-saffron-200"
            >
              {labels.pdfOpen}
            </a>
            <a
              href="/menus/lunch-menu.pdf?v=2"
              download
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 font-jp text-sm font-medium text-cream transition hover:border-hairline-strong"
            >
              {labels.pdfDownload}
            </a>
          </div>
        </div>
      </section>

      {/* Info section */}
      <section className="border-t border-hairline px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-jp text-3xl font-light text-cream">
            {labels.visitTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-hairline bg-apple-card p-8">
              <p className="apple-eyebrow mb-4">{labels.hoursLabel}</p>
              <p className="font-jp text-lg text-cream">{labels.hoursOpen}</p>
              <p className="mt-1 font-jp text-2xl font-light text-saffron-300">{labels.hoursTime}</p>
              <p className="mt-2 font-jp text-xs text-cream/50">{labels.hoursSub}</p>
            </div>
            <div className="rounded-2xl border border-hairline bg-apple-card p-8">
              <p className="apple-eyebrow mb-4">{labels.reserveLabel}</p>
              <p className="font-jp text-cream">{labels.reserveTop}</p>
              <p className="mt-1 font-jp text-2xl font-light text-saffron-300">{labels.reserveCall}</p>
              <p className="mt-4 font-jp text-lg text-cream">{RESTAURANT.phone}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="border-t border-hairline px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-jp text-sm text-cream/50">{labels.note}</p>
          <p className="mt-2 font-jp text-xs text-cream/40">{labels.noteEn}</p>
        </div>
      </section>
    </div>
  );
}