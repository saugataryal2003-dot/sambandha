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
  hours: 'ランチ 11:00-15:00 ／ ディナー 17:00-22:00',
  hoursLunch: 'ランチ: 11:00 — 15:00',
  hoursDinner: 'ディナー: 17:00 — 22:00',
  hoursLunchEn: 'Lunch: 11:00 AM — 3:00 PM',
  hoursDinnerEn: 'Dinner: 5:00 PM — 10:00 PM',
  hoursDetailed: '毎日営業 · Open Daily',
  parking: '無料駐車場あり（5台分・徒歩すぐ）',
  parkingEn: 'Free parking available nearby (5 spaces)',
  uberEatsUrl: 'https://www.order.store/store/%E3%82%B5%E3%83%B3%E3%83%8F%E3%83%B3%E3%82%BF-%E5%B9%B8%E6%89%8B%E6%9C%AC%E5%BA%97-sambandha-sattehonten/wJmjpH6uTzqDKTEo4eKuKg',
} as const;

