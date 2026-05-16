'use client';

import { motion } from 'framer-motion';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import { SwipeHome } from '@/components/layout/SwipeHome';

interface DrinkItem {
  jp: string;
  en: string;
  price: string;
  priceTax: string;
  note?: string;
}

interface DrinkSection {
  titleJp: string;
  titleEn: string;
  brand?: string;
  items: DrinkItem[];
}

const DRINKS_DATA: DrinkSection[] = [
  {
    titleJp: 'ビール',
    titleEn: 'BEER',
    brand: 'Asahi Super Dry',
    items: [
      { jp: '生ビール', en: 'Draft Beer', price: '¥550', priceTax: '税込¥605' },
      { jp: '瓶ビール', en: 'Bottle Beer', price: '¥600', priceTax: '税込¥660' },
      { jp: 'インドビール／ネパールビール', en: 'Indian Beer / Nepal Beer', price: '¥600', priceTax: '税込¥660' },
      { jp: 'コロナ', en: 'Corona Beer', price: '¥600', priceTax: '税込¥660' },
      { jp: 'ノンアルコールビール', en: 'Non-Alcohol Beer', price: '¥380', priceTax: '税込¥418' },
    ],
  },
  {
    titleJp: '樽ハイ・サワー',
    titleEn: 'SOUR / HIGHBALL',
    items: [
      { jp: '角ハイボール', en: 'Kaku Highball', price: '¥500', priceTax: '税込¥550' },
      { jp: 'レモンサワー', en: 'Lemon Sour', price: '¥480', priceTax: '税込¥528' },
      { jp: 'リンゴサワー', en: 'Apple Sour', price: '¥480', priceTax: '税込¥528' },
      { jp: 'グレープフルーツサワー', en: 'Grapefruit Sour', price: '¥480', priceTax: '税込¥528' },
      { jp: 'ウメサワー', en: 'Ume Sour', price: '¥480', priceTax: '税込¥528' },
      { jp: 'カシスサワー', en: 'Cassis Sour', price: '¥480', priceTax: '税込¥528' },
      { jp: '巨峰サワー', en: 'Grape Sour', price: '¥480', priceTax: '税込¥528' },
      { jp: 'カンパリサワー', en: 'Campari Sour', price: '¥480', priceTax: '税込¥528' },
      { jp: 'ウーロンハイ', en: 'Oolong High', price: '¥480', priceTax: '税込¥528' },
      { jp: '緑茶ハイ', en: 'Green Tea High', price: '¥480', priceTax: '税込¥528' },
    ],
  },
  {
    titleJp: 'ワイン',
    titleEn: 'WINE',
    items: [
      { jp: 'グラスワイン（赤・白）', en: 'Glass Wine / Red · White', price: '¥500', priceTax: '税込¥550' },
      { jp: 'ボトルワイン（赤・白）', en: 'Bottle Wine / Red · White', price: '¥2,500', priceTax: '税込¥2,750' },
    ],
  },
  {
    titleJp: '焼酎',
    titleEn: 'SHO-CHU',
    items: [
      { jp: 'ロック', en: 'Rock', price: '¥500', priceTax: '税込¥550' },
      { jp: '麦焼酎', en: 'Mugishochu Bottle', price: '¥3,000', priceTax: '税込¥3,300' },
      { jp: '芋焼酎', en: 'Imoshochu Bottle', price: '¥3,000', priceTax: '税込¥3,300' },
      { jp: '眞露', en: 'Jinro Bottle', price: '¥2,500', priceTax: '税込¥2,750' },
    ],
  },
  {
    titleJp: '日本酒',
    titleEn: 'JAPANESE SAKE',
    items: [
      { jp: '冷酒 300ml', en: 'Cold Sake 300ml', price: '¥700', priceTax: '税込¥770' },
      { jp: '1合', en: '1 cup of sake', price: '¥400', priceTax: '税込¥440' },
      { jp: '2合', en: '2 cups of sake', price: '¥600', priceTax: '税込¥660' },
    ],
  },
  {
    titleJp: 'ホッピー',
    titleEn: 'HOPPY',
    items: [
      { jp: 'ホッピーセット', en: 'Hoppy Set', price: '¥500', priceTax: '税込¥550' },
      { jp: 'ホッピー（中）', en: 'Hoppy (NAKA)', price: '¥250', priceTax: '税込¥275' },
      { jp: 'ホッピー（外）', en: 'Hoppy (SOTO)', price: '¥350', priceTax: '税込¥385' },
    ],
  },
  {
    titleJp: 'ウイスキー',
    titleEn: 'WHISKY',
    items: [
      { jp: 'シングル（スコッチウイスキー）', en: 'Single Scotch Whisky', price: '¥500', priceTax: '税込¥550' },
      { jp: 'ダブル', en: 'Double', price: '¥800', priceTax: '税込¥880' },
      { jp: 'インドウイスキー／スコッチウイスキー', en: 'Nepal Khukurirum Bottle', price: '¥6,000', priceTax: '税込¥6,600', note: 'Indian Whisky / Scotch Whisky / Nepal Khukurirum Bottle' },
      { jp: '国産ウイスキー 角', en: 'Japanese Whisky Bottle (KAKU)', price: '¥4,000', priceTax: '税込¥4,400' },
    ],
  },
  {
    titleJp: 'カクテル',
    titleEn: 'COCKTAILS',
    items: [
      { jp: 'ラムベース', en: 'Rum Base', price: '', priceTax: '' },
      { jp: 'ウォッカベース', en: 'Vodka Base', price: '', priceTax: '' },
      { jp: 'ジンベース', en: 'Gin Base', price: '', priceTax: '' },
      { jp: 'カンパリベース', en: 'Campari Base', price: '', priceTax: '' },
      { jp: 'カシスベース', en: 'Cassis Base', price: '', priceTax: '' },
    ],
  },
  {
    titleJp: 'ソフトドリンク',
    titleEn: 'SOFT DRINKS',
    items: [
      { jp: 'ラッシー', en: 'Lassi', price: '¥300', priceTax: '税込¥330' },
      { jp: 'マンゴーラッシー／マンゴージュース', en: 'Mango Lassi / Mango Juice', price: '¥450', priceTax: '税込¥495' },
      { jp: 'バナナラッシー', en: 'Banana Lassi', price: '¥500', priceTax: '税込¥550' },
      { jp: 'オレンジジュース', en: 'Orange Juice', price: '¥300', priceTax: '税込¥330' },
      { jp: 'コーラ', en: 'Coke', price: '¥300', priceTax: '税込¥330' },
      { jp: 'ジンジャーエール', en: 'Ginger Ale', price: '¥300', priceTax: '税込¥330' },
      { jp: 'チャイ', en: 'Chai', price: '¥380', priceTax: '税込¥418' },
      { jp: 'コーヒー', en: 'Coffee', price: '¥300', priceTax: '税込¥330' },
      { jp: 'ウーロン茶', en: 'Oolong Tea', price: '¥300', priceTax: '税込¥330' },
    ],
  },
];

function DrinkItem({ item, index }: { item: DrinkItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-white/[0.06] py-3 last:border-b-0"
    >
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="font-jp text-base font-medium text-cream">{item.jp}</p>
          <p className="font-jp text-sm text-cream/60 italic">{item.en}</p>
          {item.note && (
            <p className="font-jp text-xs text-cream/40 mt-1">{item.note}</p>
          )}
        </div>
        {item.price && (
          <div className="flex-shrink-0 text-right">
            <p className="font-jp text-base font-semibold text-saffron-300">
              {item.price}
            </p>
            <p className="font-jp text-xs text-cream/40">{item.priceTax}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function DrinkSection({ section, index }: { section: DrinkSection; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-12"
    >
      <div className="mb-6 pb-4 border-b border-saffron-300/40">
        <h3 className="font-jp text-2xl font-light text-cream mb-1">
          {section.titleJp}
        </h3>
        <p className="font-display text-sm font-light tracking-widest text-saffron-300 uppercase">
          {section.titleEn}
        </p>
        {section.brand && (
          <p className="font-jp text-xs text-saffron-300/80 mt-2">✦ {section.brand} ✦</p>
        )}
      </div>
      <div className="space-y-0">
        {section.items.map((item, i) => (
          <DrinkItem key={i} item={item} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function DrinksMenuPage() {
  return (
    <main className="min-h-screen bg-ink">
      <SwipeHome />
      {/* Hero section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="container mx-auto max-w-4xl px-6 relative z-10">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 font-jp text-xs font-medium tracking-[0.25em] text-saffron-300">
              <span className="h-px w-8 bg-saffron-300" />
              メニュー
              <span className="h-px w-8 bg-saffron-300" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-jp text-5xl md:text-6xl font-light leading-[1.1] text-cream mb-6">
              ドリンク<span className="text-gradient-warm">メニュー</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-jp text-lg text-cream/60 max-w-2xl">
              インドから日本まで、世界の味わいを。お食事と共に、厳選されたドリンクをお楽しみください。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Drinks menu */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-4xl px-6">
          {DRINKS_DATA.map((section, index) => (
            <DrinkSection key={section.titleEn} section={section} index={index} />
          ))}
        </div>
      </section>

      {/* Footer note */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <p className="font-jp text-sm text-cream/50">
            ご質問やご不明な点がございましたら、スタッフまでお気軽にお問い合わせください。
          </p>
          <p className="font-jp text-xs text-cream/40 mt-4">
            All prices include tax. 価格は税込み表示です。
          </p>
        </div>
      </section>
    </main>
  );
}
