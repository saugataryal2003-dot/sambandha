'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

const REVIEWS = [
  {
    quote:
      'The Sambandha Set is a journey — every plate tells a story, every spice has intention. The best Indian food in Saitama.',
    author: 'Yuki Tanaka',
    role: 'Regular guest',
  },
  {
    quote:
      'Tandoori chicken that rivals what I had in Delhi. Warm service, generous portions. We come back every other week.',
    author: 'Marcus Chen',
    role: 'Food blogger',
  },
  {
    quote:
      'Authentic flavors that feel made with love. The butter chicken alone is worth the trip from Tokyo.',
    author: 'Aoi Kobayashi',
    role: 'First-time visitor',
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
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-saffron-300">
              <span className="h-px w-8 bg-saffron-300" />
              Guest Voices
              <span className="h-px w-8 bg-saffron-300" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-light leading-[1.05] text-cream md:text-6xl">
              Stories from{' '}
              <span className="text-gradient-warm italic">our table.</span>
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
              <blockquote className="mt-5 text-base leading-relaxed text-cream/80 md:text-lg">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-white/[0.06] pt-5">
                <p className="font-display text-base font-medium text-cream">
                  {review.author}
                </p>
                <p className="mt-0.5 text-xs uppercase tracking-wider text-cream/40">
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
