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
    default: 'Sambandha — Authentic Indian Cuisine in Satte, Saitama',
    template: '%s · Sambandha',
  },
  description:
    'An immersive Indian dining experience in the heart of Satte, Saitama. Sambandha — where ancient spices meet modern hospitality. Reserve a table today.',
  keywords: [
    'Indian restaurant Satte',
    'Sambandha',
    'サンバンダ',
    'curry Saitama',
    'authentic Indian cuisine Japan',
    'tandoori Saitama',
    'butter chicken Satte',
  ],
  authors: [{ name: 'Sambandha Restaurant' }],
  creator: 'Sambandha Restaurant',
  openGraph: {
    type: 'website',
    locale: 'en_JP',
    alternateLocale: 'ja_JP',
    url: 'https://sambandharestaurant.com',
    siteName: 'Sambandha',
    title: 'Sambandha — Authentic Indian Cuisine in Satte, Saitama',
    description:
      'An immersive Indian dining experience. Ancient spices, modern hospitality, unforgettable meals.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sambandha — Authentic Indian Cuisine',
    description: 'Where ancient spices meet modern hospitality. Satte, Saitama.',
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
      lang="en"
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
