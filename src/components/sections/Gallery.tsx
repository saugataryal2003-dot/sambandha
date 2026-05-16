'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import { useLang } from '@/lib/i18n';

const PHOTOS = [
  {
    src: '/images/naan.jpg',
    title: 'Giant Naan',
    titleJp: '巨大ナン',
    rowSpan: 2,
  },
  {
    src: '/images/butter-chicken.jpg',
    title: 'Butter Chicken',
    titleJp: 'バターチキン',
    rowSpan: 1,
  },
  {
    src: '/images/palak-paneer.jpg',
    title: 'Palak Paneer',
    titleJp: 'パラックパニール',
    rowSpan: 1,
  },
  {
    src: '/images/hero-spread.jpg',
    title: 'Sambandha Spread',
    titleJp: 'サンバンダ盛り合わせ',
    rowSpan: 2,
  },
  {
    src: '/images/tandoori-chicken.jpg',
    title: 'Tandoori Chicken',
    titleJp: 'タンドリーチキン',
    rowSpan: 2,
  },
];

export function Gallery() {
  const { lang } = useLang();
  const eyebrow = lang === 'ja' ? 'ギャラリー' : 'Gallery';
  const title1 = lang === 'ja' ? '五感で味わう、' : 'A feast for';
  const title2 = lang === 'ja' ? '至福のひととき。' : 'the senses.';
  const igLabel = lang === 'ja' ? 'インスタグラムをフォロー' : 'Follow on Instagram';
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const headlineX = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section id="gallery" className="relative overflow-hidden bg-ink py-24 md:py-36">
      <div className="container mx-auto max-w-7xl px-6" ref={ref}>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6 md:mb-20">
          <div>
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 font-jp text-xs font-medium tracking-[0.25em] text-saffron-300">
                <span className="h-px w-8 bg-saffron-300" />
                {eyebrow}
              </p>
            </Reveal>
            <motion.h2
              style={{ x: headlineX }}
              className={`${lang === 'ja' ? 'font-jp' : 'font-display'} text-5xl font-light leading-[0.95] text-cream md:text-7xl lg:text-8xl`}
            >
              <RevealText>{title1}</RevealText>
              <br />
              <RevealText delay={0.15} className="text-gradient-warm italic">
                {title2}
              </RevealText>
            </motion.h2>
          </div>
          <Reveal delay={0.3}>
            <a
              href="https://www.instagram.com/sambandharestaurant?igsh=Y3hoMTYwbXZud2t2&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-cream/70 transition hover:text-saffron-300"
            >
              <Instagram className="h-4 w-4" />
              {igLabel}
              <span className="h-px w-6 bg-current transition-all group-hover:w-10" />
            </a>
          </Reveal>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4 md:gap-4 lg:auto-rows-[260px]">
          {PHOTOS.map((photo, i) => (
            <GalleryItem key={photo.src} photo={photo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  photo,
  index,
}: {
  photo: (typeof PHOTOS)[number];
  index: number;
}) {
  const rowSpanClass =
    photo.rowSpan === 2 ? 'row-span-2' : 'row-span-1';

  return (
    <motion.figure
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.9,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden rounded-3xl border border-white/[0.12] shadow-ios-md transition-all duration-300 hover:shadow-ios-lg ${rowSpanClass}`}
    >
      <img
        src={photo.src}
        alt={photo.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
      <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="font-jp text-xs text-cream/50">{photo.titleJp}</p>
        <p className="mt-1 font-display text-xl font-light text-cream md:text-2xl">
          {photo.title}
        </p>
      </figcaption>
    </motion.figure>
  );
}
