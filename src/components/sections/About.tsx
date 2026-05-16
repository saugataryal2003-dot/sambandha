'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Flame, HeartHandshake, Leaf, Wheat } from 'lucide-react';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import { useLang } from '@/lib/i18n';

const PILLAR_ICONS = [Flame, Sparkles, HeartHandshake, Leaf];
const PILLAR_KEYS = ['spices', 'chefs', 'hospitality', 'fresh'] as const;

export function About() {
  const { t } = useLang();
  const PILLARS = PILLAR_KEYS.map((key, i) => ({
    icon: PILLAR_ICONS[i],
    title: t.about.pillars[key].title,
    titleEn: t.about.pillars[key].subtitle,
    body: t.about.pillars[key].body,
  }));
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
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.12] shadow-ios-lg"
            >
              <img
                src="/images/naan.jpg"
                alt={t.about.naanBadge}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/* Naan badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-ink/80 px-4 py-3 backdrop-blur">
                <Wheat className="h-5 w-5 flex-none text-saffron-300" strokeWidth={1.5} />
                <div>
                  <p className="font-jp text-sm font-semibold text-saffron-300">{t.about.naanBadge}</p>
                  <p className="font-jp text-xs text-cream/60">{t.about.naanCaption}</p>
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
                {t.about.yearsLabel}
              </p>
            </Reveal>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 font-jp text-xs font-medium tracking-[0.25em] text-saffron-300">
                <span className="h-px w-8 bg-saffron-300" />
                {t.about.eyebrow}
              </p>
            </Reveal>

            <h2 className="font-jp text-4xl font-light leading-[1.2] text-cream md:text-5xl lg:text-6xl">
              <RevealText>{t.about.title1}</RevealText>
              <br />
              <RevealText delay={0.15} className="text-gradient-warm">
                {t.about.title2}
              </RevealText>
            </h2>

            <Reveal delay={0.3} className="mt-8 space-y-5 font-jp text-base leading-relaxed text-cream/70 md:text-lg">
              <p>
                <span className="text-saffron-300">{t.about.p1Prefix}</span>
                {t.about.p1}
              </p>
              <p>{t.about.p2}</p>
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
                  className="group relative overflow-hidden rounded-2xl glass-card-light p-5 transition-all duration-300 hover:glass-card-medium hover:-translate-y-1 hover:shadow-ios-md"
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
