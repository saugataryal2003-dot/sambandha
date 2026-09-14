'use client';

import { useLang } from '@/lib/i18n';

const REVIEWS = [
  {
    quote:
      '近隣のインド料理店すべてに行きましたが、ここが間違いなくナンバーワンです。本物の味と温かい接客で、地元で愛され続けている理由がわかります。',
    quoteEn:
      'I\'ve been to all the nearby Indian restaurants and this is undoubtedly number one. Authentic flavor and warm service — you can see why locals love it.',
    author: '幸手市在住',
    authorEn: 'Satte Resident',
    role: '地元のお客様',
    roleEn: 'Local Customer',
  },
  {
    quote:
      'ナンが超ビッグで美味しい！外はカリッと、中はもちもち。バランスが絶妙で、何度食べても感動します。',
    quoteEn:
      'The naan is huge and delicious! Crispy outside, fluffy inside — a perfect balance. I\'m impressed every single time.',
    author: '田中 由紀',
    authorEn: 'Yuki Tanaka',
    role: '常連のお客様',
    roleEn: 'Regular Customer',
  },
  {
    quote:
      'チーズナンは生地よりチーズの方が多いくらい！とろ〜りとろけて、たまらない美味しさ。一度食べたら忘れられません。',
    quoteEn:
      'The cheese naan has more cheese than dough! Melty, gooey, unforgettable. Once you try it, you\'ll be hooked.',
    author: '小林 葵',
    authorEn: 'Aoi Kobayashi',
    role: 'リピーター',
    roleEn: 'Repeat Customer',
  },
  {
    quote:
      '15年以上通っています。味も接客も変わらず、いつ来ても安心の美味しさ。家族の特別な日には必ずサンバンダです。',
    quoteEn:
      'I\'ve been coming for over 15 years. The taste and service never change — always reliably delicious. Sambandha is our go-to for family celebrations.',
    author: 'マーカス・チェン',
    authorEn: 'Marcus Chen',
    role: '15年以上の常連様',
    roleEn: '15+ Year Regular',
  },
];

export function Testimonials() {
  const { t, lang } = useLang();
  const isJa = lang === 'ja';

  return (
    <section aria-label="Guest reviews" className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <p className="apple-eyebrow mb-4 text-center">{t.testimonials.eyebrow}</p>
        <h2 className="apple-subhead text-center font-jp text-cream">
          {isJa ? (
            <>勧めたくなる店が、<br className="md:hidden" />ここにある。</>
          ) : (
            <>Some places you recommend without being asked.</>
          )}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
          {REVIEWS.map((review, i) => (
            <figure key={i} className="flex flex-col">
              <p className="font-display text-7xl font-light leading-none text-saffron-300/40" aria-hidden>
                &ldquo;
              </p>
              <blockquote className="mt-3 font-jp text-[15px] leading-relaxed text-cream/80">
                {isJa ? review.quote : review.quoteEn}
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-jp text-sm font-medium text-cream">
                  {isJa ? review.author : review.authorEn}
                </p>
                <p className="mt-0.5 font-jp text-xs text-cream/40">
                  {isJa ? review.role : review.roleEn}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-hairline bg-apple-card p-8 text-center md:p-10">
          <p className="text-sm text-saffron-300">★★★★★</p>
          <p className="mt-3 font-jp text-base text-cream/80">{t.testimonials.badge}</p>
          <a
            href="https://maps.app.goo.gl/jRHQbbAxDAqAJ2az5"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-saffron-300 px-7 py-3 font-jp text-sm font-semibold text-ink transition hover:bg-saffron-200"
          >
            {t.testimonials.writeReview}
          </a>
        </div>
      </div>
    </section>
  );
}