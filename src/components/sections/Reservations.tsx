'use client';

import { useState, FormEvent, useEffect } from 'react';
import { Calendar, Clock, Users, Mail, Phone, User, MessageSquare, Check } from 'lucide-react';
import { useLang } from '@/lib/i18n';

const EMAILJS_SERVICE_ID = 'service_ncicd3l';
const EMAILJS_RESTAURANT_TEMPLATE_ID = 'template_r9t0j18';
const EMAILJS_CUSTOMER_TEMPLATE_ID = 'template_7s34lfl';
const EMAILJS_PUBLIC_KEY = 'oGLloXm5AnlPxHD6p';
const RESTAURANT_EMAIL = 'sambandha2009@gmail.com';

export function Reservations() {
  const { lang } = useLang();
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

      const templateParams = {
        customer_name: String(formData.get('name') ?? ''),
        customer_email: String(formData.get('email') ?? ''),
        customer_phone: String(formData.get('phone') ?? ''),
        guest_count: String(formData.get('guests') ?? ''),
        reservation_date: String(formData.get('date') ?? ''),
        reservation_time: String(formData.get('time') ?? ''),
        customer_requests: String(formData.get('requests') ?? '') || labels.none,
      };

      const emailjs = await import('emailjs-com');

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_RESTAURANT_TEMPLATE_ID, {
        ...templateParams,
        to_email: RESTAURANT_EMAIL,
      });

      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CUSTOMER_TEMPLATE_ID, templateParams);
      } catch {}

      setSubmitting(false);
      setSubmitted(true);
    } catch {
      setSubmitting(false);
      alert(labels.errorAlert);
    }
  };

  return (
    <section id="reservations" className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <p className="apple-eyebrow mb-4 text-center">{labels.eyebrow}</p>
        <h2 className="apple-subhead text-center font-jp text-cream">
          {labels.title1}
          <br />
          {labels.title2}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-center font-jp text-base text-cream/60">
          {labels.intro}
        </p>

        <div className="mx-auto mt-12 max-w-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <Field icon={<User className="h-4 w-4" />} label={labels.name} name="name" type="text" required placeholder={labels.namePh} />
                <Field icon={<Mail className="h-4 w-4" />} label={labels.email} name="email" type="email" required placeholder="example@email.com" />
                <Field icon={<Phone className="h-4 w-4" />} label={labels.phone} name="phone" type="tel" required placeholder={labels.phonePh} />
                <Field icon={<Users className="h-4 w-4" />} label={labels.guests} name="guests" type="select" required>
                  <option value="">{labels.guestsPh}</option>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>{labels.guestsUnit(n)}</option>
                  ))}
                  <option value="7+">{labels.guestsMore}</option>
                </Field>
                <Field icon={<Calendar className="h-4 w-4" />} label={labels.date} name="date" type="date" required />
                <Field icon={<Clock className="h-4 w-4" />} label={labels.time} name="time" type="time" required />
              </div>
              <div>
                <Field icon={<MessageSquare className="h-4 w-4" />} label={labels.requests} name="requests" type="textarea" placeholder={labels.requestsPh} />
              </div>

              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="font-jp text-xs text-cream/40">{labels.confirmNote}</p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="min-h-[48px] rounded-full bg-saffron-300 px-8 py-3 font-jp text-sm font-semibold text-ink transition hover:bg-saffron-200 disabled:opacity-60"
                >
                  {submitting ? labels.submitting : labels.submit}
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-saffron-300/20 ring-1 ring-saffron-300/40">
                <Check className="h-7 w-7 text-saffron-300" strokeWidth={2.5} />
              </div>
              <h3 className="mt-6 font-jp text-3xl font-light text-cream">{labels.successTitle}</h3>
              <p className="mt-3 max-w-md font-jp text-sm text-cream/60">{labels.successBody}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

type FieldType = 'text' | 'email' | 'tel' | 'date' | 'time' | 'select' | 'textarea';

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
};

const autocompleteMap: Record<string, string> = {
  name: 'name',
  email: 'email',
  phone: 'tel',
};

function Field({ icon, label, name, type, required, placeholder, children }: FieldProps) {
  const id = `field-${name}`;
  const base =
    'w-full rounded-xl border border-hairline bg-transparent px-4 py-3 pl-11 text-sm text-cream placeholder-cream/35 transition-colors focus:border-hairline-strong focus:outline-none min-h-[48px]';

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-jp text-xs font-medium text-cream/60">
        {label}
        {required && <span className="ml-1 text-saffron-300">*</span>}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-cream/30">
          {icon}
        </span>
        {type === 'select' ? (
          <select id={id} name={name} required={required} className={`${base} cursor-pointer`} defaultValue="">
            {children}
          </select>
        ) : type === 'textarea' ? (
          <textarea
            id={id}
            name={name}
            required={required}
            placeholder={placeholder}
            rows={3}
            className={`${base} resize-none`}
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
            className={base}
          />
        )}
      </div>
    </div>
  );
}