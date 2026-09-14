'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { RESTAURANT } from '@/lib/utils';

export function Footer() {
  const { t, lang } = useLang();
  const isJa = lang === 'ja';

  return (
    <footer className="border-t border-hairline bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-saffron-300 font-display text-lg font-bold text-ink">
                S
              </div>
              <div>
                <p className="font-display text-xl font-medium text-cream">Sambandha</p>
                <p className="font-jp text-[10px] text-cream/50">{isJa ? 'サンバンダ' : 'Indian Restaurant, Satte'}</p>
              </div>
            </div>
            <p className="mt-5 max-w-xs font-jp text-sm leading-relaxed text-cream/50">
              {t.footer.tagline}
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-cream/40">
              {t.footer.visit}
            </p>
            <ul className="space-y-2.5">
              {[
                { label: t.nav.home, href: '#home' },
                { label: t.nav.menu, href: '#menu' },
                { label: t.nav.about, href: '#about' },
                { label: t.nav.reservations, href: '#reservations' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-jp text-sm text-cream/60 transition hover:text-saffron-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-cream/40">
              {t.footer.contact}
            </p>
            <ul className="space-y-2.5 font-jp text-sm text-cream/60">
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-saffron-300" />
                {isJa ? RESTAURANT.address : RESTAURANT.addressEn}
              </li>
              <li>
                <a href={`tel:${RESTAURANT.phoneRaw}`} className="flex items-center gap-2 transition hover:text-saffron-300">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-saffron-300" />
                  {RESTAURANT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${RESTAURANT.email}`} className="flex items-center gap-2 transition hover:text-saffron-300">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-saffron-300" />
                  {RESTAURANT.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 rounded-full border border-hairline px-4 py-1.5 text-center font-jp text-xs text-cream/50">
              {t.footer.openDaily} · 11:00–22:00
            </p>
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 sm:flex-row">
          <p className="font-jp text-xs text-cream/40">
            © 2026 Sambandha. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6 font-jp text-xs text-cream/40">
            <a href="/privacy" className="transition hover:text-saffron-300">Privacy Policy</a>
            <a href="/terms" className="transition hover:text-saffron-300">Terms</a>
            <span aria-hidden className="text-saffron-300">·</span>
            <span>{t.footer.heart1} · {t.footer.heart2}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}