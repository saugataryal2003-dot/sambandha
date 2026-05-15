'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { NAV_LINKS, RESTAURANT } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { useLang } from '@/lib/i18n';

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.lunch, href: '/menu/lunch' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.reservations, href: '#reservations' },
    { label: t.nav.contact, href: '#contact' },
  ];

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
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500',
          'w-[calc(100%-2rem)] max-w-6xl rounded-full',
          scrolled
            ? 'border border-white/[0.08] bg-black/40 backdrop-blur-2xl shadow-2xl shadow-black/40'
            : 'border border-transparent bg-transparent'
        )}
      >
        <nav className="flex items-center justify-between px-5 py-3 md:px-7 md:py-3.5">
          <a href="#home" className="group flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-saffron-300/30 transition group-hover:ring-saffron-300/60">
              <div className="absolute inset-0 bg-gradient-to-br from-saffron-200 via-saffron-300 to-saffron-500" />
              <span className="relative flex h-full w-full items-center justify-center font-display text-base font-bold text-ink">
                S
              </span>
            </div>
            <div className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-lg font-medium tracking-wide text-cream">
                Sambandha
              </span>
              <span className="font-jp text-[10px] text-cream/50">サンバンダ</span>
            </div>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      'relative rounded-full px-4 py-1.5 font-jp text-sm font-medium transition-colors',
                      isActive ? 'text-cream' : 'text-cream/60 hover:text-cream'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-white/[0.06]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang(lang === 'ja' ? 'en' : 'ja')}
              aria-label="Toggle language"
              className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-cream/70 transition hover:border-saffron-300/40 hover:text-saffron-300"
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="font-medium">{lang === 'ja' ? 'EN' : '日本語'}</span>
            </button>
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className="hidden items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-cream/80 transition hover:border-saffron-300/40 hover:text-saffron-300 sm:flex"
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-cream transition hover:border-white/30 lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 lg:hidden"
            data-lenis-prevent
          >
            <div className="absolute inset-0 bg-ink/95 backdrop-blur-2xl" />
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
                closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
              }}
              className="relative flex h-full flex-col items-center justify-center gap-2 px-6"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block font-jp text-4xl font-light text-cream/90 transition hover:text-saffron-300 sm:text-5xl"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                className="mt-8 flex flex-col items-center gap-3"
              >
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
                  className="mt-2 flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-cream/70"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>{lang === 'ja' ? 'Switch to English' : '日本語に切替'}</span>
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
