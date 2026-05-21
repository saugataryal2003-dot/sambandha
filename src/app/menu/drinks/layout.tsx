import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'ドリンクメニュー | Drinks Menu',
  description: '幸手市サンバンダのドリンクメニュー。ビール・ワイン・カクテル・ソフトドリンク。',
  openGraph: {
    title: 'ドリンクメニュー · サンバンダ - 幸手市インド料理',
    description: 'インドビールからカクテルまで。食事に合うドリンクを豊富にご用意。',
    images: [{ url: '/images/hero-spread.jpg', width: 1200, height: 630 }],
  },
};

export default function DrinksLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
