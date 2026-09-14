'use client';

import { useLang } from '@/lib/i18n';

const DESSERTS = [
  {
    name: 'Chocolate Cheese Naan',
    nameJp: 'チョコレートチーズナン',
    price: '¥800',
    tax: '税込 ¥880',
    description: 'ふわふわのナン生地にとろけるチーズとリッチなチョコレートを包み込んだ、当店自慢のデザート。',
    descriptionEn: 'Our signature dessert — fluffy naan dough filled with melted cheese and rich chocolate. A must-try.',
    flagship: true,
  },
];

export default function DessertMenuPage() {
  const { lang } = useLang();

  const labels = lang === 'ja' ? {
    eyebrow: 'デザートメニュー',
    title1: '甘さの中に',
    title2: '至福の一枚。',
    intro: '焼き立てのナンに包まれた、新感覚のデザート。チョコレートとチーズの絶妙なハーモニーをお楽しみください。',
    flagshipBadge: '新メニュー · シェフ自慢',
    pdfEyebrow: '公式デザートメニュー',
    pdfTitle: 'デザートメニュー PDF',
    pdfSubtitle: 'メニューをそのままご覧いただけます',
    pdfOpen: '新しいタブで開く',
    pdfDownload: 'ダウンロード',
    pdfFallback: 'PDFを表示できない場合は、こちらをクリックしてください。',
  } : {
    eyebrow: 'Dessert Menu',
    title1: 'Sweet endings,',
    title2: 'baked with love.',
    intro: 'A fresh-baked naan wrapped around melted cheese and rich chocolate — our newest signature dessert.',
    flagshipBadge: "New · Chef's Signature",
    pdfEyebrow: 'Official Dessert Menu',
    pdfTitle: 'Dessert Menu PDF',
    pdfSubtitle: 'View our dessert menu in full',
    pdfOpen: 'Open in new tab',
    pdfDownload: 'Download',
    pdfFallback: "Can't see the PDF? Click here to open it.",
  };

  return (
    <div className="min-h-screen bg-ink">
      <section className="px-6 pb-8 pt-36 md:pt-44">
        <div className="mx-auto max-w-4xl">
          <p className="apple-eyebrow mb-4">{labels.eyebrow}</p>
          <h1 className="font-jp text-5xl font-light leading-tight text-cream md:text-6xl">
            {labels.title1}
            <br />
            {labels.title2}
          </h1>
          <p className="mt-6 max-w-2xl font-jp text-lg text-cream/60">{labels.intro}</p>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-hairline">
            <img
              src="/images/IMG_2356.jpeg"
              alt="Chocolate Cheese Naan"
              className="h-[400px] w-full object-cover md:h-[560px]"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          {DESSERTS.map((item) => (
            <div
              key={item.nameJp}
              className="rounded-2xl border border-saffron-300/50 bg-saffron-300/[0.06] p-8"
            >
              {item.flagship && (
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-saffron-300/20 px-3 py-1 font-jp text-xs font-semibold tracking-wider text-saffron-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-saffron-300" />
                  {labels.flagshipBadge}
                </div>
              )}
              <h3 className="font-jp text-3xl font-light text-cream">
                {lang === 'ja' ? item.nameJp : item.name}
              </h3>
              <p className="mt-1 text-sm text-cream/40">{lang === 'ja' ? item.name : item.nameJp}</p>
              <p className="mt-4 font-jp text-sm leading-relaxed text-cream/70">
                {lang === 'ja' ? item.description : item.descriptionEn}
              </p>
              <div className="mt-6 flex items-baseline justify-between border-t border-hairline pt-6">
                <div>
                  <p className="font-display text-4xl font-light text-saffron-300">{item.price}</p>
                  <p className="font-jp text-xs text-cream/40">{item.tax}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-hairline px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="apple-eyebrow mb-3">{labels.pdfEyebrow}</p>
            <h2 className="font-jp text-3xl font-light text-cream md:text-4xl">{labels.pdfTitle}</h2>
            <p className="mt-2 font-jp text-sm text-cream/60">{labels.pdfSubtitle}</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-hairline">
            <object
              data="/menus/dessert-menu.pdf#view=FitH"
              type="application/pdf"
              className="block h-[80vh] min-h-[600px] w-full"
              aria-label={labels.pdfTitle}
            >
              <div className="flex h-[400px] items-center justify-center p-8 text-center">
                <a
                  href="/menus/dessert-menu.pdf"
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
              href="/menus/dessert-menu.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-saffron-300 px-6 py-3 font-jp text-sm font-semibold text-ink transition hover:bg-saffron-200"
            >
              {labels.pdfOpen}
            </a>
            <a
              href="/menus/dessert-menu.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 font-jp text-sm font-medium text-cream transition hover:border-hairline-strong"
            >
              {labels.pdfDownload}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}