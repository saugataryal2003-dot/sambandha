'use client';

import { MapPin, Phone, Mail, Clock, Car } from 'lucide-react';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { RESTAURANT } from '@/lib/utils';
import { useLang } from '@/lib/i18n';

export function Contact() {
  const { t, lang } = useLang();
  const INFO_BLOCKS = [
    {
      icon: MapPin,
      label: t.contact.labels.address,
      lines: lang === 'ja' ? [RESTAURANT.address, RESTAURANT.addressEn] : [RESTAURANT.addressEn, RESTAURANT.address],
      href: `https://maps.app.goo.gl/jRHQbbAxDAqAJ2az5?g_st=ic`,
    },
    {
      icon: Phone,
      label: t.contact.labels.phone,
      lines: [RESTAURANT.phone],
      href: `tel:${RESTAURANT.phoneRaw}`,
    },
    {
      icon: Clock,
      label: t.contact.labels.hours,
      lines: lang === 'ja'
        ? [RESTAURANT.hoursLunch, RESTAURANT.hoursDinner, t.contact.openDaily]
        : [RESTAURANT.hoursLunchEn, RESTAURANT.hoursDinnerEn, t.contact.openDaily],
    },
    {
      icon: Car,
      label: t.contact.labels.parking,
      lines: lang === 'ja' ? [RESTAURANT.parking, RESTAURANT.parkingEn] : [RESTAURANT.parkingEn, RESTAURANT.parking],
    },
    {
      icon: Mail,
      label: t.contact.labels.email,
      lines: [RESTAURANT.email],
      href: `mailto:${RESTAURANT.email}`,
    },
  ];

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    RESTAURANT.addressEn
  )}&output=embed`;

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 md:py-36">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-12 md:mb-20">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 font-jp text-xs font-medium tracking-[0.25em] text-saffron-300">
              <span className="h-px w-8 bg-saffron-300" />
              {t.contact.eyebrow}
            </p>
          </Reveal>
          <h2 className="font-jp text-4xl font-light leading-[1.2] text-cream md:text-5xl lg:text-6xl">
            <RevealText>{t.contact.title1}</RevealText>
            <br />
            <RevealText delay={0.15} className="text-gradient-warm">
              {t.contact.title2}
            </RevealText>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Map */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/[0.08] md:h-[520px]">
              <iframe
                src={mapSrc}
                title="Sambandha location on Google Maps"
                className="absolute inset-0 h-full w-full grayscale-[40%] invert-[8%] [color-scheme:dark]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
            </div>
          </Reveal>

          {/* Info */}
          <div className="grid gap-4 lg:col-span-5">
            {INFO_BLOCKS.map((block, i) => {
              const content = (
                <div className="glass-card-light flex items-start gap-4 p-6 transition-all duration-300 group-hover:glass-card-medium group-hover:-translate-y-1 group-hover:shadow-ios-md">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-saffron-300/10 text-saffron-300 ring-1 ring-saffron-300/20">
                    <block.icon className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="font-jp text-xs font-medium tracking-widest text-saffron-300/80">
                      {block.label}
                    </p>
                    <div className="mt-2 space-y-1">
                      {block.lines.map((line, j) => (
                        <p
                          key={j}
                          className={`text-sm leading-relaxed ${
                            j === 0 ? 'text-cream' : 'text-cream/50'
                          } font-jp`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );

              if (block.href) {
                return (
                  <Reveal key={block.label} delay={0.15 + i * 0.07}>
                    <a
                      href={block.href}
                      target={block.href.startsWith('http') ? '_blank' : undefined}
                      rel={block.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="group block"
                    >
                      {content}
                    </a>
                  </Reveal>
                );
              }
              return (
                <Reveal key={block.label} delay={0.15 + i * 0.07}>
                  <div className="group">{content}</div>
                </Reveal>
              );
            })}

            <Reveal delay={0.5} className="mt-2">
              <MagneticButton href={`tel:${RESTAURANT.phoneRaw}`}>
                <span className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-saffron-300 px-6 py-4 font-jp text-sm font-semibold text-ink transition hover:bg-saffron-200">
                  {t.contact.bookByPhone}
                  <Phone className="h-4 w-4 transition group-hover:rotate-12" />
                </span>
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
