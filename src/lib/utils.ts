import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const RESTAURANT = {
  nameEn: 'Sambandha',
  nameJp: 'サンバンダ',
  tagline: 'Authentic Indian Cuisine',
  taglineJp: '本格インド料理',
  address: '埼玉県幸手市東2-20-40',
  addressEn: 'Satte, Saitama 340-0114, Japan',
  phone: '0480-44-2323',
  phoneRaw: '0480442323',
  email: 'sambandha2009@gmail.com',
  hours: '11:00 — 22:00',
  hoursDetailed: 'Mon — Sun · 11:00 AM — 10:00 PM',
} as const;

export const NAV_LINKS = [
  { label: 'ホーム', href: '#home' },
  { label: 'メニュー', href: '#menu' },
  { label: '私たちについて', href: '#about' },
  { label: 'ギャラリー', href: '#gallery' },
  { label: 'ご予約', href: '#reservations' },
  { label: 'お問合せ', href: '#contact' },
] as const;
