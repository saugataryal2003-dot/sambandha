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
    </>
  );
}
