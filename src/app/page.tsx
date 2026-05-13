import { Hero } from '@/components/sections/Hero';
import { SignatureMarquee } from '@/components/sections/SignatureMarquee';
import { Menu } from '@/components/sections/Menu';
import { About } from '@/components/sections/About';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Reservations } from '@/components/sections/Reservations';
import { Contact } from '@/components/sections/Contact';
import { PageLoader } from '@/components/layout/PageLoader';

export default function Home() {
  return (
    <>
      <PageLoader />
      <Hero />
      <SignatureMarquee />
      <Menu />
      <About />
      <Gallery />
      <Testimonials />
      <Reservations />
      <Contact />
      <JsonLd />
    </>
  );
}

function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Sambandha',
    alternateName: 'サンバンダ',
    description:
      'Authentic Indian cuisine in the heart of Satte, Saitama. Hand-prepared dishes with traditional spices.',
    servesCuisine: ['Indian', 'Tandoori', 'Vegetarian'],
    priceRange: '¥¥',
    telephone: '+81-480-44-2323',
    email: 'sambandha2009@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '東2-20-40',
      addressLocality: 'Satte',
      addressRegion: 'Saitama',
      postalCode: '340-0114',
      addressCountry: 'JP',
    },
    url: 'https://sambandharestaurant.com',
    openingHours: 'Mo-Su 11:00-22:00',
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
