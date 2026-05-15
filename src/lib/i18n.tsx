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
    };
    openDaily: string;
    bookByPhone: string;
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
      about: '私たちについて',
      gallery: 'ギャラリー',
      reservations: 'ご予約',
      contact: 'お問合せ',
      reserve: 'ご予約',
    },
    welcome: {
      title: 'ようこそ',
      subtitle: '言語をお選びください',
      tagline: '幸手市の本格インド料理',
      enter: 'サイトへ入る',
    },
    hero: {
      badge: '本日営業中',
      hours: 'ランチ 11:00 / ディナー 17:00',
      jpName: 'サンバンダ — 縁',
      tagline: '文化の縁。古代のスパイス、現代のおもてなし — 埼玉県幸手市にある本格インド料理。',
      bookNow: '📞 今すぐ予約',
      reserveForm: 'フォーム予約',
      lunchMenu: 'ランチメニュー',
      rating: '2009年より地元の皆様に愛されて',
      scroll: 'スクロール',
    },
    about: {
      eyebrow: '私たちの物語',
      title1: '文化を繋ぐ',
      title2: 'ご縁の場所。',
      p1Prefix: '「サンバンダ」',
      p1: 'とはサンスクリット語で「縁」を意味します — 文化と文化、味と味、そして食卓を囲む人々の繋がり。',
      p2: '埼玉県幸手市に佇むサンバンダでは、本場インドの味を日本にお届けしています。一皿一皿、厳選されたスパイスと食材を使い、代々受け継がれてきた伝統製法で、心を込めてお作りしています。',
      yearsLabel: '年の歴史',
      naanBadge: '名物 巨大ナン',
      naanCaption: 'お客様に愛される、大きくてふわふわのナン',
      pillars: {
        spices: { title: '本場のスパイス', subtitle: 'Authentic Spices', body: 'インドから直輸入の香辛料。伝統製法を大切に、独自にブレンドしています。' },
        chefs: { title: 'シェフの技', subtitle: 'Expert Chefs', body: '数十年の経験と情熱を込めて、一皿一皿丁寧にお作りしています。' },
        hospitality: { title: '温かいおもてなし', subtitle: 'Warm Hospitality', body: 'はじめてのお客様も、お帰りには友人のように — それがサンバンダ。' },
        fresh: { title: '毎日新鮮', subtitle: 'Fresh Daily', body: '手作り、じっくり煮込み、冷凍は使いません。新鮮なおいしさをお届けします。' },
      },
    },
    contact: {
      eyebrow: 'お問い合わせ',
      title1: 'あなたの席を、',
      title2: 'お探しください。',
      labels: {
        address: '所在地',
        phone: 'お電話',
        hours: '営業時間',
        parking: '駐車場',
        email: 'メール',
      },
      openDaily: '毎日営業 · Open Daily',
      bookByPhone: '電話でご予約',
    },
    footer: {
      tagline: '文化と味の繋がり。インドから直輸入したスパイスと、変わらぬ伝統で、心を込めて手作りした本場のインド料理。',
      visit: 'ご来店',
      contact: 'お問い合わせ',
      openDaily: '毎日営業 · Open Daily',
      rights: 'All rights reserved.',
      heart1: '埼玉県幸手市にて',
      heart2: '心を込めて',
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
      about: 'About',
      gallery: 'Gallery',
      reservations: 'Reservations',
      contact: 'Contact',
      reserve: 'Reserve',
    },
    welcome: {
      title: 'Welcome',
      subtitle: 'Please select your language',
      tagline: 'Authentic Indian Cuisine in Satte',
      enter: 'Enter Site',
    },
    hero: {
      badge: 'Open Now',
      hours: 'Lunch 11:00 / Dinner 17:00',
      jpName: 'Sambandha — Connection',
      tagline: 'A connection of cultures. Ancient spices, modern hospitality — authentic Indian cuisine in Satte, Saitama.',
      bookNow: '📞 Book Now',
      reserveForm: 'Reserve Online',
      lunchMenu: 'Lunch Menu',
      rating: 'Loved by locals since 2009',
      scroll: 'Scroll',
    },
    about: {
      eyebrow: 'Our Story',
      title1: 'A Place Where',
      title2: 'Cultures Meet.',
      p1Prefix: '"Sambandha"',
      p1: ' is a Sanskrit word meaning "connection" — a bond between cultures, between flavors, and between the people gathered at our table.',
      p2: 'Located in Satte, Saitama, Sambandha brings the authentic flavors of India to Japan. Every dish is made with hand-selected spices and ingredients, prepared with traditional methods passed down through generations.',
      yearsLabel: 'Years of History',
      naanBadge: 'Signature Giant Naan',
      naanCaption: 'Our beloved oversized, fluffy naan — a customer favorite',
      pillars: {
        spices: { title: 'Authentic Spices', subtitle: '本場のスパイス', body: 'Spices imported directly from India. Blended in-house using traditional methods.' },
        chefs: { title: 'Expert Chefs', subtitle: 'シェフの技', body: 'Decades of experience and passion, crafted into every single plate.' },
        hospitality: { title: 'Warm Hospitality', subtitle: '温かいおもてなし', body: 'First-time guests leave as friends — that is the Sambandha way.' },
        fresh: { title: 'Fresh Daily', subtitle: '毎日新鮮', body: 'Handmade, slow-simmered, never frozen. Always fresh, always flavorful.' },
      },
    },
    contact: {
      eyebrow: 'Get in Touch',
      title1: 'Find your seat,',
      title2: 'reserve your table.',
      labels: {
        address: 'Address',
        phone: 'Phone',
        hours: 'Hours',
        parking: 'Parking',
        email: 'Email',
      },
      openDaily: 'Open Daily',
      bookByPhone: 'Call to Book',
    },
    footer: {
      tagline: 'A connection of cultures and flavors. Spices imported from India, prepared with timeless tradition — authentic Indian cuisine, handmade with heart.',
      visit: 'Visit',
      contact: 'Contact',
      openDaily: 'Open Daily',
      rights: 'All rights reserved.',
      heart1: 'Made in Satte, Saitama',
      heart2: 'With love',
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
