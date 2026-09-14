'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';

const GA_ID = 'G-1Q58GXHPE3';
const CONSENT_KEY = 'sambandha-consent';

function loadGtag() {
  if (document.querySelector(`script[src*="googletagmanager"]`)) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  const inline = document.createElement('script');
  inline.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `;
  document.head.appendChild(inline);
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let consent: string | null = null;
    try {
      consent = window.localStorage.getItem(CONSENT_KEY);
    } catch {}
    if (consent === 'accepted') {
      loadGtag();
    } else if (consent === null) {
      setVisible(true);
    }
  }, []);

  const decide = (choice: 'accepted' | 'declined') => {
    try {
      window.localStorage.setItem(CONSENT_KEY, choice);
    } catch {}
    if (choice === 'accepted') loadGtag();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-4 z-[60] px-4 sm:bottom-6 sm:px-6"
      data-lenis-prevent
    >
      <div className="apple-card mx-auto flex max-w-2xl flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-saffron-300/15 text-saffron-400">
            <Cookie className="h-5 w-5" />
          </span>
          <div className="text-sm leading-relaxed text-cream/60">
            <p>このサイトでは、訪問状況の分析のためにCookieを使用しています。</p>
            <Link
              href="/privacy"
              className="link-underline mt-1 inline-block text-saffron-400"
            >
              プライバシーポリシー
            </Link>
          </div>
        </div>
        <div className="flex flex-none gap-2">
          <button
            type="button"
            onClick={() => decide('declined')}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-5 font-jp text-xs font-semibold text-cream transition hover:border-white/30 hover:bg-white/10"
          >
            拒否
          </button>
          <button
            type="button"
            onClick={() => decide('accepted')}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-saffron-300 px-6 font-jp text-xs font-semibold text-ink transition hover:bg-saffron-200"
          >
            同意する
          </button>
        </div>
      </div>
    </div>
  );
}