import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'デザートメニュー | Dessert Menu',
  description: '幸手市サンバンダの新デザート — チョコレートチーズナン。焼き立てのナン生地に、チョコとチーズを包み込んだ一枚。',
  openGraph: {
    title: 'デザートメニュー · サンバンダ - 幸手市インド料理',
    description: '新登場：チョコレートチーズナン — チョコとチーズの絶妙な組み合わせ。',
    images: [{ url: '/images/IMG_2356.jpeg', width: 1200, height: 630 }],
  },
};

export default function DessertLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
