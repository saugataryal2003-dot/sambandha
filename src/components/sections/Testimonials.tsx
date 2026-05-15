'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

const REVIEWS = [
  {
    quote:
      'サンバンダセットは料理の旅です。一皿一皿に物語があり、スパイスの一つひとつに思いが込められています。埼玉で一番のインド料理。',
    author: '田中 由紀',
    role: '常連のお客様',
    rating: 5,
  },
  {
    quote:
      'タンドリーチキンは、まるでデリで食べた本場の味。温かい接客と、たっぷりとした盛り付け。月に何度も通っています。',
    author: 'マーカス・チェン',
    role: 'フードブロガー',
    rating: 5,
  },
  {
    quote:
      '愛情を込めて作られた本場の味。バターチキンだけでも、東京から足を運ぶ価値があります。',
    author: '小林 葵',
    role: '初めてのご来店',
    rating: 5,
  },
];

export function Testimonials() {
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
              お客様の声
              <span className="h-px w-8 bg-saffron-300" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-jp text-3xl font-light leading-[1.2] text-cream md:text-5xl">
              食卓から生まれた、{' '}
              <span className="text-gradient-warm">物語。</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
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
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-colors hover:border-white/15 hover:bg-white/[0.04] md:p-8"
            >
              <Quote
                className="h-7 w-7 text-saffron-300/40 transition-colors group-hover:text-saffron-300/60"
                strokeWidth={1.5}
              />
              <div className="mt-3 flex gap-1">
                {[...Array(review.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-saffron-300 text-saffron-300"
                  />
                ))}
              </div>
              <blockquote className="mt-3 font-jp text-base leading-relaxed text-cream/80 md:text-lg">
                「{review.quote}」
              </blockquote>
              <figcaption className="mt-6 border-t border-white/[0.06] pt-5">
                <p className="font-jp text-base font-medium text-cream">
                  {review.author}
                </p>
                <p className="mt-0.5 font-jp text-xs tracking-wider text-cream/40">
                  {review.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
