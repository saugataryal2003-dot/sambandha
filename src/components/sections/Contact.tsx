'use client';

import { MapPin, Phone, Mail, Clock, Car, Bike } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { RESTAURANT } from '@/lib/utils';

export function Contact() {
  const { t, lang } = useLang();
  const c = t.contact;
  const isJa = lang === 'ja';

  const infoRows = [
    { icon: <MapPin className="h-4 w-4" />, label: c.labels.address, value: isJa ? RESTAURANT.address : RESTAURANT.addressEn },
    { icon: <Car className="h-4 w-4" />, label: c.labels.parking, value: isJa ? '専用駐車場あり' : 'Free parking on site' },
    {
      icon: <Phone className="h-4 w-4" />,
      label: c.labels.phone,
      value: (
        <a href={`tel:${RESTAURANT.phoneRaw}`} className="link-underline text-saffron-300">
          {RESTAURANT.phone}
        </a>
      ),
    },
    {
      icon: <Mail className="h-4 w-4" />,
      label: c.labels.email,
      value: (
        <a href={`mailto:${RESTAURANT.email}`} className="link-underline text-saffron-300">
          {RESTAURANT.email}
        </a>
      ),
    },
    { icon: <Clock className="h-4 w-4" />, label: c.labels.hours, value: isJa ? RESTAURANT.hours : 'Mon–Sun: Lunch 11–15 · Dinner 17–22' },
    { icon: <Bike className="h-4 w-4" />, label: c.labels.delivery, value: c.labels.delivery === 'デリバリー' ? 'Uber Eats 配達あり' : 'Available on Uber Eats' },
  ];

  return (
    <section id="contact" className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <p className="apple-eyebrow mb-4 text-center">{c.eyebrow}</p>
        <h2 className="apple-subhead text-center font-jp text-cream">
          {c.title1}
          <br />
          {c.title2}
        </h2>
        <p className="mt-4 text-center font-jp text-sm text-cream/50">{c.openDaily}</p>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {/* Info list */}
          <div className="lg:col-span-5">
            <div className="divide-y divide-hairline rounded-2xl border border-hairline px-6">
              {infoRows.map((row, i) => (
                <div key={i} className="flex items-baseline justify-between gap-6 py-5">
                  <span className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-wide text-cream/40">
                    <span className="text-saffron-300">{row.icon}</span>
                    {row.label}
                  </span>
                  <span className="text-right font-jp text-sm text-cream/80">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[280px] overflow-hidden rounded-2xl border border-hairline">
              <iframe
                src="https://www.google.com/maps?q=Satte+Saitama+Sambandha&output=embed"
                title={c.labels.address}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${RESTAURANT.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full bg-saffron-300 px-7 py-3 font-jp text-sm font-semibold text-ink transition hover:bg-saffron-200"
          >
            <Phone className="h-4 w-4" />
            {c.bookByPhone}
          </a>
          <a
            href={RESTAURANT.uberEatsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-hairline px-7 py-3 font-jp text-sm font-medium text-cream transition hover:border-hairline-strong"
          >
            <Bike className="h-4 w-4" />
            {c.orderOnUberEats}
          </a>
        </div>
      </div>
    </section>
  );
}