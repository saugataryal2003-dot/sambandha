'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, Mail, Phone, User, MessageSquare, Check } from 'lucide-react';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function Reservations() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate small delay for UX (production would send to a server / email service)
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="reservations"
      className="relative overflow-hidden bg-ink py-24 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-saffron-500/[0.06] blur-3xl" />

      <div className="container relative mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center md:mb-16">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 font-jp text-xs font-medium tracking-[0.25em] text-saffron-300">
              <span className="h-px w-8 bg-saffron-300" />
              ご予約
              <span className="h-px w-8 bg-saffron-300" />
            </p>
          </Reveal>
          <h2 className="font-jp text-4xl font-light leading-[1.2] text-cream md:text-5xl lg:text-6xl">
            <RevealText>素敵な夜を、</RevealText>
            <br />
            <RevealText delay={0.15} className="text-gradient-warm">
              ご予約ください。
            </RevealText>
          </h2>
          <Reveal delay={0.3} className="mx-auto mt-6 max-w-md">
            <p className="font-jp text-base leading-relaxed text-cream/60">
              ご予約後、お電話またはメールにてご確認の連絡をいたします。
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl md:p-12">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="grid gap-5 md:grid-cols-2 md:gap-6"
                >
                  <Field
                    icon={<User className="h-4 w-4" />}
                    label="お名前"
                    name="name"
                    type="text"
                    required
                    placeholder="山田 太郎"
                  />
                  <Field
                    icon={<Mail className="h-4 w-4" />}
                    label="メールアドレス"
                    name="email"
                    type="email"
                    required
                    placeholder="example@email.com"
                  />
                  <Field
                    icon={<Phone className="h-4 w-4" />}
                    label="電話番号"
                    name="phone"
                    type="tel"
                    required
                    placeholder="000-0000-0000"
                  />
                  <Field
                    icon={<Users className="h-4 w-4" />}
                    label="人数"
                    name="guests"
                    type="select"
                    required
                  >
                    <option value="">人数を選択</option>
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n}名様
                      </option>
                    ))}
                    <option value="7+">7名様以上</option>
                  </Field>
                  <Field
                    icon={<Calendar className="h-4 w-4" />}
                    label="ご来店日"
                    name="date"
                    type="date"
                    required
                  />
                  <Field
                    icon={<Clock className="h-4 w-4" />}
                    label="時間"
                    name="time"
                    type="time"
                    required
                  />
                  <div className="md:col-span-2">
                    <Field
                      icon={<MessageSquare className="h-4 w-4" />}
                      label="ご要望"
                      name="requests"
                      type="textarea"
                      placeholder="アレルギー、特別なご要望、記念日など..."
                    />
                  </div>

                  <div className="md:col-span-2 mt-2 flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="font-jp text-xs text-cream/50">
                      ご予約後、お電話またはメールにてご確認いたします。
                    </p>
                    <MagneticButton strength={0.2}>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-saffron-300 px-8 py-3.5 font-jp text-sm font-semibold text-ink transition hover:bg-saffron-200 disabled:opacity-60"
                      >
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                        <span className="relative">
                          {submitting ? '送信中...' : '予約する'}
                        </span>
                      </button>
                    </MagneticButton>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="grid h-16 w-16 place-items-center rounded-full bg-saffron-300/20 ring-1 ring-saffron-300/40"
                    >
                      <Check className="h-7 w-7 text-saffron-300" strokeWidth={2.5} />
                    </motion.div>
                  </div>
                  <h3 className="mt-6 font-jp text-3xl font-light text-cream md:text-4xl">
                    ご予約を承りました。
                  </h3>
                  <p className="mt-3 max-w-md font-jp text-sm leading-relaxed text-cream/60">
                    ありがとうございます。確認のため、お電話またはメールにて間もなくご連絡いたします。
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

interface FieldProps {
  icon: React.ReactNode;
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  children?: React.ReactNode;
}

function Field({
  icon,
  label,
  name,
  type,
  required,
  placeholder,
  children,
}: FieldProps) {
  const baseStyle =
    'peer w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 pl-11 text-sm text-cream placeholder-cream/30 transition-colors focus:border-saffron-300/60 focus:bg-white/[0.05] focus:outline-none';

  return (
    <label className="relative block">
      <span className="mb-2 block font-jp text-xs font-medium tracking-wider text-cream/50">
        {label}
        {required && <span className="ml-1 text-saffron-300">*</span>}
      </span>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-cream/40 peer-focus:text-saffron-300">
          {icon}
        </span>
        {type === 'select' ? (
          <select name={name} required={required} className={baseStyle} defaultValue="">
            {children}
          </select>
        ) : type === 'textarea' ? (
          <textarea
            name={name}
            required={required}
            placeholder={placeholder}
            rows={3}
            className={`${baseStyle} resize-none`}
          />
        ) : (
          <input
            name={name}
            type={type}
            required={required}
            placeholder={placeholder}
            className={baseStyle}
          />
        )}
      </div>
    </label>
  );
}
