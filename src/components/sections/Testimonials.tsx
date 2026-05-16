'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
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
    rating: 5,
    highlight: '地域No.1',
    highlightEn: '#1 in the area',
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
    rating: 5,
    highlight: '名物ナン',
    highlightEn: 'Signature Naan',
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
    rating: 5,
    highlight: 'チーズナン',
    highlightEn: 'Cheese Naan',
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
    rating: 5,
    highlight: '15年以上の信頼',
    highlightEn: '15+ Years of Trust',
  },
];

export function Testimonials() {
  const { t, lang } = useLang();
  const reviewCtaTitle = lang === 'ja' ? 'サンバンダがお気に入りなら、' : 'If you love Sambandha,';
  const reviewCtaHighlight = lang === 'ja' ? 'レビューをお願いします' : 'please leave us a review';
  const reviewCtaSub = lang === 'ja' ? 'お客様の声が、私たちの励みになります。' : 'Your words mean the world to us.';
  const reviewBtnLabel = lang === 'ja' ? 'Googleでレビューを書く' : 'Write a Google Review';
  return (
    <section
      aria-label="Guest reviews"
      className="relative overflow-hidden bg-ink py-24 md:py-32"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center md:mb-16">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 font-jp text-xs font-medium tracking-[0.25em] text-saffron-300">
              <span className="h-px w-8 bg-saffron-300" />
              {t.testimonials.eyebrow}
              <span className="h-px w-8 bg-saffron-300" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-jp text-3xl font-light leading-[1.2] text-cream md:text-5xl">
              {lang === 'ja' ? (
                <>地元で15年以上、 <span className="text-gradient-warm">愛され続ける味。</span></>
              ) : (
                <>Loved by locals for <span className="text-gradient-warm">over 15 years.</span></>
              )}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-saffron-300/30 bg-saffron-300/5 px-5 py-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-saffron-300 text-saffron-300"
                  />
                ))}
              </div>
              <span className="font-jp text-sm text-cream/80">
                {t.testimonials.badge}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review, i) => (
            <motion.figure
              key={review.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <Quote
                  className="h-7 w-7 text-saffron-300/40 transition-colors group-hover:text-saffron-300/60"
                  strokeWidth={1.5}
                />
                <span className="rounded-full bg-saffron-300/10 px-2.5 py-1 font-jp text-[10px] font-medium tracking-wider text-saffron-300">
                  {lang === 'ja' ? review.highlight : review.highlightEn}
                </span>
              </div>
              <div className="mt-3 flex gap-1">
                {[...Array(review.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-saffron-300 text-saffron-300"
                  />
                ))}
              </div>
              <blockquote className="mt-3 font-jp text-sm leading-relaxed text-cream/80">
                {lang === 'ja' ? `「${review.quote}」` : `"${review.quoteEn}"`}
              </blockquote>
              <figcaption className="mt-5 border-t border-white/[0.06] pt-4">
                <p className="font-jp text-sm font-medium text-cream">
                  {lang === 'ja' ? review.author : review.authorEn}
                </p>
                <p className="mt-0.5 font-jp text-xs tracking-wider text-cream/40">
                  {lang === 'ja' ? review.role : review.roleEn}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Write a Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 text-center md:mt-16 md:p-10"
        >
          <p className="font-jp text-xl font-light text-cream md:text-2xl">
            {reviewCtaTitle}<br className="md:hidden" />
            <span className="text-saffron-300">{reviewCtaHighlight}</span>
          </p>
          <p className="font-jp text-sm text-cream/60">
            {reviewCtaSub}
          </p>
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJ&q=Sambandha+Restaurant+Satte"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-saffron-300 px-7 py-3.5 font-jp text-sm font-semibold text-ink transition hover:bg-saffron-200"
          >
            <Star className="h-4 w-4 fill-ink" strokeWidth={2.5} />
            {reviewBtnLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
