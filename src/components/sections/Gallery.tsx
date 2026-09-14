'use client';

import { useLang } from '@/lib/i18n';

const IMAGES = [
  { src: '/images/naan.jpg', alt: 'サンバンダ名物の巨大ナン' },
  { src: '/images/interior.jpg', alt: '店内の様子' },
  { src: '/images/buffet.jpg', alt: 'ビュッフェエリア' },
  { src: '/images/food-1.jpg', alt: '料理の一皿' },
  { src: '/images/tandoori.jpg', alt: 'タンドリーチキン' },
  { src: '/images/food-2.jpg', alt: 'カレー' },
  { src: '/images/chef.jpg', alt: 'シェフの仕事' },
  { src: '/images/drink.jpg', alt: 'レストランのシーン' },
  { src: '/images/dessert.jpg', alt: 'デザート' },
];

export function Gallery() {
  const { lang, t } = useLang();
  const eyebrow = lang === 'ja' ? 'ギャラリー' : 'Gallery';
  const title = lang === 'ja' ? 'お店の雰囲気、' : 'A look inside.';
  const title2 = lang === 'ja' ? 'そのままに。' : 'No filter needed.';

  return (
    <section id="gallery" className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <p className="apple-eyebrow mb-4 text-center">{eyebrow}</p>
        <h2 className="apple-subhead text-center font-jp text-cream">
          {title}
          <br />
          {title2}
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:gap-5">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden rounded-2xl border border-hairline"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}