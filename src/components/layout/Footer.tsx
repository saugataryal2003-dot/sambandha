'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { RESTAURANT } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-ink">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2 bg-gradient-radial from-saffron-500/10 to-transparent blur-3xl" />

      <div className="container mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h3 className="font-display text-5xl font-light leading-none text-cream md:text-6xl">
              Sambandha
            </h3>
            <p className="mt-2 font-jp text-base text-saffron-300/80">サンバンダ</p>
            <p className="mt-6 max-w-sm font-jp text-sm leading-relaxed text-cream/60">
              文化と味の繋がり。インドから直輸入したスパイスと、変わらぬ伝統で、心を込めて手作りした本場のインド料理。
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="https://www.instagram.com/sambandharestaurant?igsh=Y3hoMTYwbXZud2t2&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-cream/70 transition hover:border-saffron-300/40 hover:text-saffron-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-cream/70 transition hover:border-saffron-300/40 hover:text-saffron-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:col-span-7">
            <div className="space-y-5">
              <h4 className="font-jp text-xs font-medium tracking-widest text-saffron-300/80">
                ご来店
              </h4>
              <div className="flex items-start gap-3 text-sm text-cream/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-saffron-300/60" />
                <div>
                  <p className="font-jp text-cream">{RESTAURANT.address}</p>
                  <p className="mt-1 text-cream/50">{RESTAURANT.addressEn}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-cream/70">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-saffron-300/60" />
                <div>
                  <p className="text-cream">{RESTAURANT.hours}</p>
                  <p className="mt-1 text-cream/50">{RESTAURANT.hoursDetailed}</p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <h4 className="font-jp text-xs font-medium tracking-widest text-saffron-300/80">
                お問い合わせ
              </h4>
              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="group flex items-center gap-3 text-sm text-cream/70 transition hover:text-cream"
              >
                <Phone className="h-4 w-4 text-saffron-300/60 transition group-hover:text-saffron-300" />
                {RESTAURANT.phone}
              </a>
              <a
                href={`mailto:${RESTAURANT.email}`}
                className="group flex items-center gap-3 break-all text-sm text-cream/70 transition hover:text-cream"
              >
                <Mail className="h-4 w-4 flex-none text-saffron-300/60 transition group-hover:text-saffron-300" />
                {RESTAURANT.email}
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 border-t border-white/[0.06] pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-cream/40 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} <span className="font-jp">サンバンダ レストラン</span>. All rights reserved.</p>
            <p className="flex items-center gap-2 font-jp">
              <span>埼玉県幸手市にて</span>
              <span aria-hidden>·</span>
              <span>心を込めて</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Oversized wordmark */}
      <div className="pointer-events-none select-none overflow-hidden">
        <div className="-mb-8 whitespace-nowrap text-center font-display text-[18vw] font-light leading-none tracking-tighter text-saffron-300/[0.05] md:-mb-16 md:text-[14vw]">
          Sambandha
        </div>
      </div>
    </footer>
  );
}
