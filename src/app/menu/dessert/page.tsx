'use client';

import { motion } from 'framer-motion';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import { useLang } from '@/lib/i18n';

const DESSERTS = [
  {
    name: 'Chocolate Cheese Naan',
    nameJp: 'チョコレートチーズナン',
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
    photoTitle: 'デザートギャラリー',
  } : {
    eyebrow: 'Dessert Menu',
    title1: 'Sweet endings,',
    title2: 'baked with love.',
    intro: 'A fresh-baked naan wrapped around melted cheese and rich chocolate — our newest signature dessert.',
    flagshipBadge: 'New · Chef\'s Signature',
    pdfEyebrow: 'Official Dessert Menu',
    pdfTitle: 'Dessert Menu PDF',
    pdfSubtitle: 'View our dessert menu in full',
    pdfOpen: 'Open in new tab',
    pdfDownload: 'Download',
    pdfFallback: 'Can\'t see the PDF? Click here to open it.',
    photoTitle: 'Dessert Gallery',
  };

  return (
    <main className="min-h-screen bg-ink">
      {/* Hero */}
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
            <p className="font-jp text-lg text-cream/60 max-w-2xl">{labels.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Hero Photo */}
      <section className="pb-12">
        <div className="container mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/[0.08] shadow-2xl">
              <img
                src="/images/IMG_2356.jpeg"
                alt="Chocolate Cheese Naan"
                className="w-full h-[400px] md:h-[560px] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dessert Item */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-6">
          {DESSERTS.map((item, index) => (
            <motion.div
              key={item.nameJp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-saffron-300/40 bg-gradient-to-br from-saffron-500/10 to-transparent p-8 hover:border-saffron-300/60 hover:shadow-lg hover:shadow-saffron-500/20 transition-all"
            >
              {item.flagship && (
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-saffron-300/20 px-3 py-1 font-jp text-xs font-semibold tracking-wider text-saffron-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-saffron-200" />
                  {labels.flagshipBadge}
                </div>
              )}
              <h3 className="font-jp text-3xl font-light text-cream">
                {lang === 'ja' ? item.nameJp : item.name}
              </h3>
              <p className="mt-1 text-sm text-cream/40">
                {lang === 'ja' ? item.name : item.nameJp}
              </p>
              <p className="mt-4 font-jp text-sm leading-relaxed text-cream/70">
                {lang === 'ja' ? item.description : item.descriptionEn}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PDF Section */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="container mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="mb-10 text-center">
              <p className="mb-3 inline-flex items-center gap-2 font-jp text-xs font-medium tracking-[0.25em] text-saffron-300">
                <span className="h-px w-8 bg-saffron-300" />
                {labels.pdfEyebrow}
                <span className="h-px w-8 bg-saffron-300" />
              </p>
              <h2 className="font-jp text-3xl md:text-4xl font-light text-cream">{labels.pdfTitle}</h2>
              <p className="font-jp text-sm text-cream/60 mt-2">{labels.pdfSubtitle}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
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
          </Reveal>

          <Reveal delay={0.2}>
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
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 font-jp text-sm font-medium text-cream backdrop-blur transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                {labels.pdfDownload}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
