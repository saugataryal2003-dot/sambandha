import { Hero } from '@/components/sections/Hero';
import { Menu } from '@/components/sections/Menu';
import { About } from '@/components/sections/About';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Reservations } from '@/components/sections/Reservations';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <Testimonials />
      <Reservations />
      <Contact />
    </>
  );
}
