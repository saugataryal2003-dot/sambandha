import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import '@/styles/ios-design-system.css';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { CursorGlow } from '@/components/layout/CursorGlow';
import { FloatingActionButton } from '@/components/layout/FloatingActionButton';
import { LanguageProvider } from '@/lib/i18n';
import { LanguageSelector } from '@/components/layout/LanguageSelector';

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
    default: '幸手市のインド料理 サンバンダ | 本格カレー・タンドリー・ナンランチ',
    template: '%s · サンバンダ - 幸手市インド料理',
  },
  description:
    '【幸手市 インド料理】本格インド料理レストラン「サンバンダ」。幸手駅近く、ランチ¥900〜、本場のカレー・タンドリーチキン・ナン。ディナーも豊富なメニュー。ご予約：0480-44-2323',
  keywords: [
    '幸手市 インド料理',
    '幸手 インド料理',
    '幸手 ランチ',
    '幸手 カレー',
    '幸手市 ランチ',
    '埼玉 インド料理',
    'サンバンダ',
    'Sambandha',
    'カレー 埼玉',
    '本格インド料理 日本',
    'タンドリー 埼玉',
    'バターチキン 幸手',
    'ナン 埼玉',
    '幸手市 レストラン',
    '幸手 ナン',
    '幸手 タンドリー',
    'インド料理 久喜',
    'インド料理 春日部',
  ],
  authors: [{ name: 'サンバンダ レストラン' }],
  creator: 'サンバンダ レストラン',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    alternateLocale: 'en_US',
    url: 'https://sambandharestaurant.com',
    siteName: 'サンバンダ - 幸手市インド料理',
    title: '幸手市のインド料理 サンバンダ | 本格カレー・タンドリー・ナン',
    description:
      '【幸手市 インド料理】ランチ¥900〜、本場のカレー・タンドリー・ナン。毎日 11:00〜22:00 営業。ご予約：0480-44-2323',
  },
  twitter: {
    card: 'summary_large_image',
    title: '幸手市のインド料理 サンバンダ',
    description: '幸手市の本格インド料理。ランチ¥900〜、カレー・タンドリー・ナン。',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'サンバンダ',
              alternateName: 'Sambandha Restaurant',
              image: 'https://sambandharestaurant.com/og-image.jpg',
              '@id': 'https://sambandharestaurant.com',
              url: 'https://sambandharestaurant.com',
              telephone: '+81-480-44-2323',
              priceRange: '¥¥',
              servesCuisine: ['Indian', 'インド料理'],
              address: {
                '@type': 'PostalAddress',
                streetAddress: '東2-20-40',
                addressLocality: '幸手市',
                addressRegion: '埼玉県',
                postalCode: '340-0114',
                addressCountry: 'JP',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.0779,
                longitude: 139.7274,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                  ],
                  opens: '11:00',
                  closes: '15:00',
                  description: 'Lunch',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                  ],
                  opens: '17:00',
                  closes: '22:00',
                  description: 'Dinner',
                },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.5',
                reviewCount: '50',
                bestRating: '5',
                worstRating: '1',
              },
              menu: 'https://sambandharestaurant.com/menu/lunch',
              acceptsReservations: 'True',
            }),
          }}
        />
        <LanguageProvider>
          <LanguageSelector />
          <SmoothScroll>
            <ScrollProgress />
            <CursorGlow />
            <Nav />
            <main className="relative">{children}</main>
            <Footer />
            <FloatingActionButton />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
