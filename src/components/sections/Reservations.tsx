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
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-saffron-300">
              <span className="h-px w-8 bg-saffron-300" />
              Reservations
              <span className="h-px w-8 bg-saffron-300" />
            </p>
          </Reveal>
          <h2 className="font-display text-5xl font-light leading-[0.95] text-cream md:text-7xl">
            <RevealText>Reserve your</RevealText>
            <br />
            <RevealText delay={0.15} className="text-gradient-warm italic">
              evening.
            </RevealText>
          </h2>
          <Reveal delay={0.3} className="mx-auto mt-6 max-w-md">
            <p className="text-base leading-relaxed text-cream/60">
              Book a table and we&apos;ll confirm by phone or email within hours.
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
                    label="Your name"
                    name="name"
                    type="text"
                    required
                    placeholder="Full name"
                  />
                  <Field
                    icon={<Mail className="h-4 w-4" />}
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                  />
                  <Field
                    icon={<Phone className="h-4 w-4" />}
                    label="Phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="000-0000-0000"
                  />
                  <Field
                    icon={<Users className="h-4 w-4" />}
                    label="Party size"
                    name="guests"
                    type="select"
                    required
                  >
                    <option value="">Number of guests</option>
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'guest' : 'guests'}
                      </option>
                    ))}
                    <option value="7+">7+ guests</option>
                  </Field>
                  <Field
                    icon={<Calendar className="h-4 w-4" />}
                    label="Date"
                    name="date"
                    type="date"
                    required
                  />
                  <Field
                    icon={<Clock className="h-4 w-4" />}
                    label="Time"
                    name="time"
                    type="time"
                    required
                  />
                  <div className="md:col-span-2">
                    <Field
                      icon={<MessageSquare className="h-4 w-4" />}
                      label="Special requests"
                      name="requests"
                      type="textarea"
                      placeholder="Dietary needs, allergies, occasion..."
                    />
                  </div>

                  <div className="md:col-span-2 mt-2 flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-xs text-cream/50">
                      We&apos;ll confirm your reservation by phone or email.
                    </p>
                    <MagneticButton strength={0.2}>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-saffron-300 px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-saffron-200 disabled:opacity-60"
                      >
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                        <span className="relative">
                          {submitting ? 'Sending...' : 'Reserve Table'}
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
                  <h3 className="mt-6 font-display text-3xl font-light text-cream md:text-4xl">
                    Reservation received.
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/60">
                    Thank you — we&apos;ll be in touch shortly to confirm your
                    booking by phone or email.
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
      <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-cream/50">
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
