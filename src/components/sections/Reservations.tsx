'use client';

import { useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, Mail, Phone, User, MessageSquare, Check } from 'lucide-react';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { useLang } from '@/lib/i18n';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_ncicd3l';
const EMAILJS_RESTAURANT_TEMPLATE_ID = 'template_r9t0j18';
const EMAILJS_CUSTOMER_TEMPLATE_ID = 'template_7s34lfl';
const EMAILJS_PUBLIC_KEY = 'oGLloXm5AnlPxHD6p';
const RESTAURANT_EMAIL = 'sambandha2009@gmail.com';

export function Reservations() {
  const { t, lang } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const labels = lang === 'ja' ? {
    eyebrow: 'ご予約',
    title1: '素敵な夜を、',
    title2: 'ご予約ください。',
    intro: 'ご予約後、お電話またはメールにてご確認いたします。',
    name: 'お名前',
    namePh: '山田 太郎',
    email: 'メールアドレス',
    phone: '電話番号',
    phonePh: '000-0000-0000',
    guests: '人数',
    guestsPh: '人数を選択',
    guestsUnit: (n: number) => `${n}名様`,
    guestsMore: '7名様以上',
    date: 'ご来店日',
    time: 'ご来店時間',
    requests: 'ご要望',
    requestsPh: 'アレルギー、記念日、お席のご希望など',
    confirmNote: 'ご予約後、お電話またはメールにてご確認いたします。',
    submitting: '送信中...',
    submit: 'この席を予約する',
    successTitle: 'ご予約を承りました。',
    successBody: 'まもなくお電話またはメールにてご連絡いたします。',
    none: 'なし',
    errorAlert: '送信できませんでした。お手数ですがお電話にてご連絡ください。',
  } : {
    eyebrow: 'Reserve',
    title1: 'Your evening',
    title2: 'starts here.',
    intro: 'We\'ll confirm by phone or email — usually within a few hours.',
    name: 'Name',
    namePh: 'John Smith',
    email: 'Email',
    phone: 'Phone',
    phonePh: '000-0000-0000',
    guests: 'Guests',
    guestsPh: 'How many?',
    guestsUnit: (n: number) => `${n} ${n === 1 ? 'guest' : 'guests'}`,
    guestsMore: '7+ guests',
    date: 'Date',
    time: 'Time',
    requests: 'Anything we should know',
    requestsPh: 'Allergies, anniversaries, seating preferences...',
    confirmNote: 'We\'ll confirm by phone or email — usually within a few hours.',
    submitting: 'Sending...',
    submit: 'Claim my table',
    successTitle: 'We\'ve got you.',
    successBody: 'Your table is being held. Expect a call or email from us soon.',
    none: 'None',
    errorAlert: 'Something went wrong. Please call us directly.',
  };

  useEffect(() => {
    // Initialize EmailJS
    if (typeof window !== 'undefined') {
      import('emailjs-com').then((emailjs) => {
        emailjs.init(EMAILJS_PUBLIC_KEY);
      });
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const customerName = String(formData.get('name') ?? '');
      const customerEmail = String(formData.get('email') ?? '');
      const customerPhone = String(formData.get('phone') ?? '');
      const guestCount = String(formData.get('guests') ?? '');
      const reservationDate = String(formData.get('date') ?? '');
      const reservationTime = String(formData.get('time') ?? '');
      const customerRequests = String(formData.get('requests') ?? '') || labels.none;

      const templateParams = {
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone,
        guest_count: guestCount,
        reservation_date: reservationDate,
        reservation_time: reservationTime,
        customer_requests: customerRequests,
      };

      // Import emailjs dynamically
      const emailjs = await import('emailjs-com');

      // Send restaurant notification (REQUIRED)
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_RESTAURANT_TEMPLATE_ID,
        {
          ...templateParams,
          to_email: RESTAURANT_EMAIL,
        }
      );

      // Send customer confirmation (OPTIONAL - don't fail if it doesn't work)
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_CUSTOMER_TEMPLATE_ID,
          templateParams
        );
      } catch {
        // customer confirmation is optional — restaurant already notified
      }

      setSubmitting(false);
      setSubmitted(true);
    } catch {
      setSubmitting(false);
      alert(labels.errorAlert);
    }
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
            <p className="apple-eyebrow mb-4">{labels.eyebrow}</p>
          </Reveal>
          <h2 className="apple-subhead font-jp text-cream">
            <RevealText>{labels.title1}</RevealText>
            <br />
            <RevealText delay={0.15} className="text-gradient-warm">
              {labels.title2}
            </RevealText>
          </h2>
          <Reveal delay={0.3} className="mx-auto mt-6 max-w-md">
            <p className="font-jp text-base leading-relaxed text-cream/60">
              {labels.intro}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="apple-card relative overflow-hidden p-6 shadow-ios-lg md:p-12">
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
                    label={labels.name}
                    name="name"
                    type="text"
                    required
                    placeholder={labels.namePh}
                  />
                  <Field
                    icon={<Mail className="h-4 w-4" />}
                    label={labels.email}
                    name="email"
                    type="email"
                    required
                    placeholder="example@email.com"
                  />
                  <Field
                    icon={<Phone className="h-4 w-4" />}
                    label={labels.phone}
                    name="phone"
                    type="tel"
                    required
                    placeholder={labels.phonePh}
                  />
                  <Field
                    icon={<Users className="h-4 w-4" />}
                    label={labels.guests}
                    name="guests"
                    type="select"
                    required
                  >
                    <option value="">{labels.guestsPh}</option>
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {labels.guestsUnit(n)}
                      </option>
                    ))}
                    <option value="7+">{labels.guestsMore}</option>
                  </Field>
                  <Field
                    icon={<Calendar className="h-4 w-4" />}
                    label={labels.date}
                    name="date"
                    type="date"
                    required
                  />
                  <Field
                    icon={<Clock className="h-4 w-4" />}
                    label={labels.time}
                    name="time"
                    type="time"
                    required
                  />
                  <div className="md:col-span-2">
                    <Field
                      icon={<MessageSquare className="h-4 w-4" />}
                      label={labels.requests}
                      name="requests"
                      type="textarea"
                      placeholder={labels.requestsPh}
                    />
                  </div>

                  <div className="md:col-span-2 mt-2 flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="font-jp text-xs text-cream/50">
                      {labels.confirmNote}
                    </p>
                    <MagneticButton strength={0.2}>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-saffron-300 px-8 py-3.5 font-jp text-sm font-semibold text-ink transition hover:bg-saffron-200 disabled:opacity-60"
                      >
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                        <span className="relative">
                          {submitting ? labels.submitting : labels.submit}
                        </span>
                      </button>
                    </MagneticButton>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  role="status"
                  aria-live="polite"
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
                    {labels.successTitle}
                  </h3>
                  <p className="mt-3 max-w-md font-jp text-sm leading-relaxed text-cream/60">
                    {labels.successBody}
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

type FieldType = 'text' | 'email' | 'tel' | 'date' | 'time' | 'number' | 'select' | 'textarea';

interface FieldProps {
  icon: React.ReactNode;
  label: string;
  name: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  children?: React.ReactNode;
}

const inputModeMap: Record<string, React.HTMLAttributes<HTMLInputElement>['inputMode']> = {
  tel: 'tel',
  email: 'email',
  date: 'numeric',
  time: 'numeric',
  number: 'numeric',
};

const autocompleteMap: Record<string, string> = {
  name: 'name',
  email: 'email',
  phone: 'tel',
};

function Field({
  icon,
  label,
  name,
  type,
  required,
  placeholder,
  children,
}: FieldProps) {
  const id = `field-${name}`;
  const baseStyle =
    'peer w-full appearance-none rounded-2xl border border-white/15 bg-white/[0.08] backdrop-blur px-4 py-4 pl-11 text-base text-cream placeholder-cream/40 transition-all duration-200 focus:border-saffron-300/60 focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-saffron-300/40 min-h-[52px]';

  return (
    <div className="relative">
      <label htmlFor={id} className="mb-2 block cursor-pointer font-jp text-sm font-medium tracking-wider text-cream/60">
        {label}
        {required && <span className="ml-1 text-saffron-300" aria-hidden>*</span>}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-cream/40 peer-focus:text-saffron-300">
          {icon}
        </span>
        {type === 'select' ? (
          <select id={id} name={name} required={required} className={`${baseStyle} cursor-pointer`} defaultValue="">
            {children}
          </select>
        ) : type === 'textarea' ? (
          <textarea
            id={id}
            name={name}
            required={required}
            placeholder={placeholder}
            rows={4}
            className={`${baseStyle} resize-none`}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            inputMode={inputModeMap[type]}
            autoComplete={autocompleteMap[name]}
            required={required}
            placeholder={placeholder}
            className={baseStyle}
          />
        )}
      </div>
    </div>
  );
}
