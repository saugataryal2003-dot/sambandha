'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Flame, HeartHandshake, Leaf } from 'lucide-react';
import { Reveal, RevealText } from '@/components/ui/Reveal';

const PILLARS = [
  {
    icon: Flame,
    title: 'Authentic Spices',
    titleJp: '本場のスパイス',
    body: 'Imported directly from India, every blend honors traditional methods.',
  },
  {
    icon: Sparkles,
    title: 'Expert Chefs',
    titleJp: 'シェフの技',
    body: 'Decades of experience and a passion for craft in every dish.',
  },
  {
    icon: HeartHandshake,
    title: 'Warm Hospitality',
    titleJp: '温かいおもてなし',
    body: 'A place where strangers leave as friends — that is Sambandha.',
  },
  {
    icon: Leaf,
    title: 'Fresh Daily',
    titleJp: '毎日新鮮',
    body: 'Hand-prepared, slow-cooked, never frozen — quality you can taste.',
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
                src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=900&q=80"
                alt="A spread of Sambandha dishes"
                className="h-full w-full object-cover"
                loading="lazy"
              />
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
              <p className="mt-2 text-xs uppercase tracking-widest text-cream/50">
                Years of craft
              </p>
            </Reveal>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-saffron-300">
                <span className="h-px w-8 bg-saffron-300" />
                Our Story
              </p>
            </Reveal>

            <h2 className="font-display text-5xl font-light leading-[1.05] text-cream md:text-6xl lg:text-7xl">
              <RevealText>The connection</RevealText>
              <br />
              <RevealText delay={0.15} className="text-gradient-warm italic">
                between cultures.
              </RevealText>
            </h2>

            <Reveal delay={0.3} className="mt-8 space-y-5 text-base leading-relaxed text-cream/70 md:text-lg">
              <p>
                <span className="font-display text-saffron-300">&ldquo;Sambandha&rdquo;</span>{' '}
                means &ldquo;connection&rdquo; in Sanskrit — the bond between cultures,
                between flavors, between the people who gather around our tables.
              </p>
              <p>
                Located in the heart of Satte, Saitama, we bring the authentic
                flavors of India to Japan. Every dish is hand-prepared with
                carefully selected spices and the finest ingredients, honoring
                traditional methods passed down through generations.
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
                  <h3 className="mt-4 font-display text-xl font-medium text-cream">
                    {pillar.title}
                  </h3>
                  <p className="font-jp text-[11px] text-cream/40">{pillar.titleJp}</p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">
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
