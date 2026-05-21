import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'ランチメニュー | Lunch Menu',
  description: '幸手市サンバンダのランチメニュー。¥900〜の4種セット。毎日 11:00〜15:00。',
  openGraph: {
    title: 'ランチメニュー · サンバンダ - 幸手市インド料理',
    description: '¥900〜の4種ランチセット。毎日 11:00〜15:00。',
    images: [{ url: '/images/hero-spread.jpg', width: 1200, height: 630 }],
  },
};

export default function LunchLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
