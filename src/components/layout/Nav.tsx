'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { RESTAURANT } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { useLang } from '@/lib/i18n';
import { useRouter, usePathname } from 'next/navigation';

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const router = useRouter();
  const pathname = usePathname() || '/';
  const isSubPage = pathname !== '/';

  const handleLogoClick = useCallback(() => {
    if (isSubPage) {
      router.push('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isSubPage, router]);

  const navLinks = useMemo(() => [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.reservations, href: '#reservations' },
    { label: t.nav.contact, href: '#contact' },
  ], [t]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActiveSection(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [navLinks]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] -translate-x-1/2 rounded-full transition-all duration-300',
          'max-w-6xl',
          scrolled
            ? 'nav-scrolled'
            : 'border border-transparent bg-transparent'
        )}
      >
        <nav className="flex items-center justify-between px-5 py-3 md:px-7 md:py-3.5">
          {/* Logo */}
          <div className="group flex items-center gap-3">
            <button
              type="button"
              onClick={handleLogoClick}
              aria-label={isSubPage ? 'Go home' : 'Scroll to top'}
              className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-hairline transition hover:ring-hairline-strong"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-saffron-200 via-saffron-300 to-saffron-500" />
              <span className="relative flex h-full w-full items-center justify-center font-display text-base font-bold text-ink">
                S
              </span>
            </button>
            <div className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-lg font-medium tracking-wide text-cream">
                Sambandha
              </span>
              <span className="font-jp text-[10px] text-cream/50">サンバンダ</span>
            </div>
          </div>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      'rounded-full px-4 py-1.5 font-jp text-sm font-medium transition-colors',
                      isActive ? 'text-cream' : 'text-cream/60 hover:text-cream'
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang(lang === 'ja' ? 'en' : 'ja')}
              aria-label="Toggle language"
              className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center gap-1.5 rounded-full border border-hairline px-3 py-1.5 text-xs font-medium text-cream/70 transition hover:border-hairline-strong hover:text-saffron-300"
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="font-medium">{lang === 'ja' ? 'EN' : '日本語'}</span>
            </button>
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className="hidden min-h-[44px] cursor-pointer items-center gap-2 rounded-full border border-hairline px-3.5 py-1.5 text-xs font-medium text-cream/80 transition hover:border-hairline-strong hover:text-saffron-300 sm:flex"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{RESTAURANT.phone}</span>
            </a>
            <a
              href="#reservations"
              className="hidden items-center gap-2 rounded-full bg-saffron-300 px-4 py-1.5 font-jp text-xs font-semibold text-ink transition hover:bg-saffron-200 md:inline-flex"
            >
              {t.nav.reserve}
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-cream transition hover:border-hairline-strong lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-apple-black/98 [backdrop-filter:blur(24px)]" />
            <ul className="relative flex h-full flex-col items-center justify-center gap-2 px-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-jp text-4xl font-light text-cream/90 transition hover:text-saffron-300 sm:text-5xl"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-8 flex flex-col items-center gap-3">
                <a
                  href={`tel:${RESTAURANT.phoneRaw}`}
                  className="text-sm text-cream/60"
                  onClick={() => setOpen(false)}
                >
                  {RESTAURANT.phone}
                </a>
                <a
                  href="#reservations"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-saffron-300 px-6 py-2.5 font-jp text-sm font-semibold text-ink"
                >
                  {t.nav.reserve}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setLang(lang === 'ja' ? 'en' : 'ja');
                    setOpen(false);
                  }}
                  className="mt-2 flex items-center gap-2 rounded-full border border-hairline px-4 py-2 text-xs text-cream/70"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>{lang === 'ja' ? 'Switch to English' : '日本語に切替'}</span>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}