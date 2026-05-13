import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { CursorGlow } from '@/components/layout/CursorGlow';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jp = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-jp',
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0A0807',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sambandharestaurant.com'),
  title: {
    default: 'サンバンダ — 埼玉県幸手市の本格インド料理レストラン',
    template: '%s · サンバンダ',
  },
  description:
    '埼玉県幸手市にある本格インド料理レストラン「サンバンダ」。古代のスパイスと現代のおもてなしが融合する、本場の味をお届けします。ご予約はお電話にて。',
  keywords: [
    'インド料理 幸手',
    'サンバンダ',
    'Sambandha',
    'カレー 埼玉',
    '本格インド料理 日本',
    'タンドリー 埼玉',
    'バターチキン 幸手',
    'ナン 埼玉',
  ],
  authors: [{ name: 'サンバンダ レストラン' }],
  creator: 'サンバンダ レストラン',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    alternateLocale: 'en_US',
    url: 'https://sambandharestaurant.com',
    siteName: 'サンバンダ',
    title: 'サンバンダ — 埼玉県幸手市の本格インド料理',
    description:
      '本場インドの味を埼玉県幸手市で。古代のスパイスと温かいおもてなしで、忘れられない一皿をお届けします。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'サンバンダ — 本格インド料理',
    description: '埼玉県幸手市の本格インド料理レストラン。古代のスパイスと温かいおもてなし。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${display.variable} ${sans.variable} ${jp.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-ink text-cream antialiased">
        <SmoothScroll>
          <ScrollProgress />
          <CursorGlow />
          <Nav />
          <main className="relative">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
