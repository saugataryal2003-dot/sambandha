'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Lang = 'ja' | 'en';

interface Pillar {
  title: string;
  subtitle: string;
  body: string;
}

interface TranslationShape {
  nav: {
    home: string;
    menu: string;
    lunch: string;
    about: string;
    gallery: string;
    reservations: string;
    contact: string;
    reserve: string;
  };
  welcome: {
    title: string;
    subtitle: string;
    tagline: string;
    enter: string;
  };
  hero: {
    badge: string;
    hours: string;
    jpName: string;
    tagline: string;
    bookNow: string;
    reserveForm: string;
    lunchMenu: string;
    rating: string;
    scroll: string;
  };
  about: {
    eyebrow: string;
    title1: string;
    title2: string;
    p1Prefix: string;
    p1: string;
    p2: string;
    yearsLabel: string;
    naanBadge: string;
    naanCaption: string;
    pillars: {
      spices: Pillar;
      chefs: Pillar;
      hospitality: Pillar;
      fresh: Pillar;
    };
  };
  contact: {
    eyebrow: string;
    title1: string;
    title2: string;
    labels: {
      address: string;
      phone: string;
      hours: string;
      parking: string;
      email: string;
      delivery: string;
    };
    openDaily: string;
    bookByPhone: string;
    orderOnUberEats: string;
  };
  footer: {
    tagline: string;
    visit: string;
    contact: string;
    openDaily: string;
    rights: string;
    heart1: string;
    heart2: string;
  };
  menu: {
    eyebrow: string;
    title1: string;
    title2: string;
    description: string;
    lunch: { label: string; labelEn: string; title: string; desc: string };
    tandoori: { label: string; labelEn: string; title: string; desc: string };
    naan: { label: string; labelEn: string; title: string; desc: string };
    curry: { label: string; labelEn: string; title: string; desc: string };
    dine: { label: string; labelEn: string; title: string; desc: string };
  };
  testimonials: {
    eyebrow: string;
    title: string;
    badge: string;
    writeReview: string;
  };
  reservations: {
    eyebrow: string;
    title1: string;
    title2: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    dateLabel: string;
    timeLabel: string;
    guestsLabel: string;
    messageLabel: string;
    submit: string;
    success: string;
    error: string;
  };
  common: {
    switchLang: string;
  };
}

export const translations: Record<Lang, TranslationShape> = {
  ja: {
    nav: {
      home: 'ホーム',
      menu: 'メニュー',
      lunch: 'ランチ',
      about: '物語',
      gallery: 'ギャラリー',
      reservations: 'ご予約',
      contact: '場所',
      reserve: '席を予約',
    },
    welcome: {
      title: 'ようこそ',
      subtitle: '言語をお選びください',
      tagline: '幸手市の本格インド料理',
      enter: '入る',
    },
    hero: {
      badge: '本日営業中',
      hours: 'ランチ 11:00 · ディナー 17:00',
      jpName: 'サンバンダ — 縁',
      tagline: 'じっくりと、深く。インドと日本が交わる場所 — 幸手市で続く、本物の味。',
      bookNow: 'お電話でご予約',
      reserveForm: 'テーブルを予約',
      lunchMenu: 'ランチを見る',
      rating: '2009年から幸手に根付いて。',
      scroll: '下へ',
    },
    about: {
      eyebrow: '物語',
      title1: '一つの言葉から',
      title2: '生まれた場所。',
      p1Prefix: 'सम्बन्ध',
      p1: ' — インドと日本、料理人と食卓、遠い地の味と懐かしい温もりのあいだに生まれる、見えないつながり。',
      p2: '2009年、幸手市に根を下ろして。すべて手作り、スパイスはインドから直輸入。どの一皿も時間と熱と手をかけて。近道は使いません。',
      yearsLabel: '年、幸手にて',
      naanBadge: '伝説のナン',
      naanCaption: '頼んでください。分けてもいいし、独り占めでも。',
      pillars: {
        spices: { title: '産地直輸入のスパイス', subtitle: 'Spices from the source', body: 'インドから直輸入。ここで独自にブレンド。袋詰めは使いません。' },
        chefs: { title: '手作りの誠実さ', subtitle: 'Made by hand', body: '省略なし。妥協なし。ただ、丁寧に。' },
        hospitality: { title: 'また来たくなる場所', subtitle: 'You will feel it', body: 'はじめての方も、気づけば常連に。それがサンバンダ。' },
        fresh: { title: '注文を受けてから作る', subtitle: 'Cooked to order', body: '冷凍なし。温め直しなし。毎回、一から。' },
      },
    },
    contact: {
      eyebrow: '場所とご予約',
      title1: '営業中。',
      title2: '空腹でどうぞ。',
      labels: {
        address: '所在地',
        phone: 'お電話',
        hours: '営業時間',
        parking: '駐車場',
        email: 'メール',
        delivery: 'デリバリー',
      },
      openDaily: '毎日営業 · Open Daily',
      bookByPhone: '電話でご予約',
      orderOnUberEats: 'Uber Eatsで注文',
    },
    footer: {
      tagline: '十五年。一つの厨房。近道なし。',
      visit: 'ご来店',
      contact: 'お問い合わせ',
      openDaily: '毎日営業',
      rights: 'All rights reserved.',
      heart1: '埼玉県幸手市',
      heart2: '2009年より',
    },
    menu: {
      eyebrow: 'お品書き',
      title1: '何を頼んでも、',
      title2: '後悔はしません。',
      description: '¥900からのランチから、フルコースのサンバンダ体験まで。どの一皿も新鮮で、どんな時間も、来てよかったと思えるひとときに。',
      lunch: { label: 'ランチ', labelEn: 'Lunch', title: '¥900から', desc: '4種の厳選セット' },
      tandoori: { label: 'タンドーリ', labelEn: 'Tandoori', title: '炎と、煙と。', desc: 'タンドール窯から直接。' },
      naan: { label: 'ナン', labelEn: 'Naan', title: '伝説のナン。', desc: '幸手が誇る、あの大きさ。' },
      curry: { label: 'カレー', labelEn: 'Curry', title: '深く、じっくり、本物。', desc: 'インド産スパイスで仕込む。' },
      dine: { label: 'ディナー', labelEn: 'Dinner', title: '夜は、じっくりと。', desc: 'フルメニューで過ごす夜。' },
    },
    testimonials: {
      eyebrow: 'お客様の声',
      title: '勧めたくなる店が、ここにある。',
      badge: '幸手市 インド料理 最高評価',
      writeReview: 'レビューを書く',
    },
    reservations: {
      eyebrow: 'ご予約',
      title1: '素敵な夜を、',
      title2: 'ご予約ください。',
      nameLabel: 'お名前',
      emailLabel: 'メールアドレス',
      phoneLabel: 'お電話番号',
      dateLabel: 'ご来店日',
      timeLabel: 'ご来店時間',
      guestsLabel: 'ご人数',
      messageLabel: 'ご要望・アレルギーなど',
      submit: 'この席を予約する',
      success: 'ご予約を承りました',
      error: '送信できませんでした。お手数ですがお電話にてご連絡ください。',
    },
    common: {
      switchLang: 'EN',
    },
  },
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      lunch: 'Lunch',
      about: 'Story',
      gallery: 'Gallery',
      reservations: 'Reserve',
      contact: 'Find Us',
      reserve: 'Reserve a table',
    },
    welcome: {
      title: 'Welcome',
      subtitle: 'Choose your language',
      tagline: 'Indian cuisine in Satte, Saitama',
      enter: 'Enter',
    },
    hero: {
      badge: 'Open today',
      hours: 'Lunch 11:00 · Dinner 17:00',
      jpName: 'Sambandha — Connection',
      tagline: 'Slow heat. Deep spice. A table worth finding — in Satte, Saitama.',
      bookNow: 'Call to reserve',
      reserveForm: 'Reserve a table',
      lunchMenu: 'Explore lunch',
      rating: 'Feeding Satte since 2009.',
      scroll: 'Discover',
    },
    about: {
      eyebrow: 'The story',
      title1: 'Born from',
      title2: 'a single word.',
      p1Prefix: 'सम्बन्ध',
      p1: ' — Sanskrit for connection. Between India and Japan, between a cook and a table, between the flavor of somewhere far away and the comfort of somewhere familiar.',
      p2: 'In Satte since 2009. Made from scratch, every day. Spices flown in from India. No shortcuts, no compromises — just the food, done right.',
      yearsLabel: 'Years in Satte',
      naanBadge: 'The Giant Naan',
      naanCaption: 'Legendary. Order one. Share it — or don\'t.',
      pillars: {
        spices: { title: 'Spices from the source', subtitle: '産地直輸入', body: 'Imported from India. Blended here. Never from a packet.' },
        chefs: { title: 'Made by hand', subtitle: '手作りの誠実さ', body: 'No shortcuts. No shortcuts. No shortcuts.' },
        hospitality: { title: 'You\'ll feel it', subtitle: 'また来たくなる', body: 'Some places you return to. This is one of them.' },
        fresh: { title: 'Cooked to order', subtitle: '注文を受けてから', body: 'No freezers. No reheating. Every plate begins fresh.' },
      },
    },
    contact: {
      eyebrow: 'Come find us',
      title1: 'We\'re open.',
      title2: 'Come hungry.',
      labels: {
        address: 'Address',
        phone: 'Phone',
        hours: 'Hours',
        parking: 'Parking',
        email: 'Email',
        delivery: 'Delivery',
      },
      openDaily: 'Open Daily',
      bookByPhone: 'Call to reserve',
      orderOnUberEats: 'Order on Uber Eats',
    },
    footer: {
      tagline: 'Fifteen years. One kitchen. No shortcuts.',
      visit: 'Visit',
      contact: 'Contact',
      openDaily: 'Open Daily',
      rights: 'All rights reserved.',
      heart1: 'Satte, Saitama',
      heart2: 'Since 2009',
    },
    menu: {
      eyebrow: 'What we serve',
      title1: 'Order anything.',
      title2: 'You won\'t regret it.',
      description: 'From ¥900 lunches to the full Sambandha experience — every dish made fresh, every plate worth staying for.',
      lunch: { label: 'Lunch', labelEn: 'ランチ', title: 'From ¥900', desc: '4 sets, daily' },
      tandoori: { label: 'Tandoori', labelEn: 'タンドーリ', title: 'Fire & smoke.', desc: 'Straight from the clay oven.' },
      naan: { label: 'Naan', labelEn: 'ナン', title: 'The giant naan.', desc: 'Legendary in Satte.' },
      curry: { label: 'Curry', labelEn: 'カレー', title: 'Deep, slow, real.', desc: 'Simmered with Indian spices.' },
      dine: { label: 'Dinner', labelEn: 'ディナー', title: 'Stay for the evening.', desc: 'The full menu. No rush.' },
    },
    testimonials: {
      eyebrow: 'What people say',
      title: 'Some places you recommend without being asked.',
      badge: 'Highest rated Indian restaurant in Satte',
      writeReview: 'Leave a review',
    },
    reservations: {
      eyebrow: 'Reserve',
      title1: 'Your evening',
      title2: 'starts here.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      dateLabel: 'Date',
      timeLabel: 'Time',
      guestsLabel: 'Guests',
      messageLabel: 'Anything we should know',
      submit: 'Claim my table',
      success: 'We\'ve got you.',
      error: 'Something went wrong. Please call us directly.',
    },
    common: {
      switchLang: '日本語',
    },
  },
};

type Translations = TranslationShape;

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  hasSelected: boolean;
  selectLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = 'sambandha-lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ja');
  const [hasSelected, setHasSelected] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === 'ja' || stored === 'en') {
        setLangState(stored);
        setHasSelected(true);
      } else {
        setHasSelected(false);
      }
    } catch {
      setHasSelected(false);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l;
    }
  };

  const selectLang = (l: Lang) => {
    setLang(l);
    setHasSelected(true);
  };

  useEffect(() => {
    if (hydrated && typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang, hydrated]);

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang],
        hasSelected: hydrated ? hasSelected : true,
        selectLang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
