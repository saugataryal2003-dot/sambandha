'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Flame, HeartHandshake, Leaf } from 'lucide-react';
import { Reveal, RevealText } from '@/components/ui/Reveal';

const PILLARS = [
  {
    icon: Flame,
    title: '本場のスパイス',
    titleEn: 'Authentic Spices',
    body: 'インドから直輸入の香辛料。伝統製法を大切に、独自にブレンドしています。',
  },
  {
    icon: Sparkles,
    title: 'シェフの技',
    titleEn: 'Expert Chefs',
    body: '数十年の経験と情熱を込めて、一皿一皿丁寧にお作りしています。',
  },
  {
    icon: HeartHandshake,
    title: '温かいおもてなし',
    titleEn: 'Warm Hospitality',
    body: 'はじめてのお客様も、お帰りには友人のように — それがサンバンダ。',
  },
  {
    icon: Leaf,
    title: '毎日新鮮',
    titleEn: 'Fresh Daily',
    body: '手作り、じっくり煮込み、冷凍は使いません。新鮮なおいしさをお届けします。',
  },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" className="relative overflow-hidden bg-ink py-24 md:py-36">
      <div className="container mx-auto max-w-7xl px-6">
        <div ref={ref} className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image stack */}
          <div className="relative lg:col-span-5">
            <motion.div
              style={{ y: imgY }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.08]"
            >
              <img
                src="/images/naan-hero.jpg"
                alt="サンバンダ名物の巨大ナン"
                className="h-full w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=900&q=80';
                }}
              />
              {/* Naan badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-ink/80 px-4 py-3 backdrop-blur">
                <span className="text-2xl">🫓</span>
                <div>
                  <p className="font-jp text-sm font-semibold text-saffron-300">名物 巨大ナン</p>
                  <p className="font-jp text-xs text-cream/60">お客様に愛される、大きくてふわふわのナン</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </motion.div>

            {/* Stats card */}
            <Reveal
              delay={0.3}
              className="absolute -bottom-8 -right-4 z-10 max-w-[200px] rounded-2xl border border-white/[0.08] bg-ink/90 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl md:-right-8 md:max-w-[240px] md:p-6"
            >
              <p className="font-display text-5xl font-light leading-none text-gradient-warm md:text-6xl">
                15+
              </p>
              <p className="mt-2 font-jp text-xs tracking-widest text-cream/50">
                年の歴史
              </p>
            </Reveal>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 font-jp text-xs font-medium tracking-[0.25em] text-saffron-300">
                <span className="h-px w-8 bg-saffron-300" />
                私たちの物語
              </p>
            </Reveal>

            <h2 className="font-jp text-4xl font-light leading-[1.2] text-cream md:text-5xl lg:text-6xl">
              <RevealText>文化を繋ぐ</RevealText>
              <br />
              <RevealText delay={0.15} className="text-gradient-warm">
                ご縁の場所。
              </RevealText>
            </h2>

            <Reveal delay={0.3} className="mt-8 space-y-5 font-jp text-base leading-relaxed text-cream/70 md:text-lg">
              <p>
                <span className="text-saffron-300">「サンバンダ」</span>
                とはサンスクリット語で「縁」を意味します — 文化と文化、味と味、そして食卓を囲む人々の繋がり。
              </p>
              <p>
                埼玉県幸手市に佇むサンバンダでは、本場インドの味を日本にお届けしています。一皿一皿、厳選されたスパイスと食材を使い、代々受け継がれてきた伝統製法で、心を込めてお作りしています。
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
                >
                  <pillar.icon
                    className="h-5 w-5 text-saffron-300 transition-transform group-hover:scale-110"
                    strokeWidth={1.6}
                  />
                  <h3 className="mt-4 font-jp text-xl font-medium text-cream">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-wider text-cream/40">{pillar.titleEn}</p>
                  <p className="mt-2 font-jp text-sm leading-relaxed text-cream/60">
                    {pillar.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
