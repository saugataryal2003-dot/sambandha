import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Keep existing for backward compat
        ink: {
          DEFAULT: 'rgb(var(--ink-rgb) / <alpha-value>)',
          50: 'rgb(var(--ink-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--ink-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--ink-200-rgb) / <alpha-value>)',
        },
        saffron: {
          DEFAULT: 'rgb(var(--saffron-300-rgb) / <alpha-value>)',
          50: '#F5E5D0',
          100: '#EBD0A8',
          200: '#E1BC85',
          300: 'rgb(var(--saffron-300-rgb) / <alpha-value>)',
          400: '#C28D54',
          500: '#9A7B2E',
        },
        flame: {
          DEFAULT: '#E04E2C',
          light: '#F26F4C',
        },
        cream: {
          DEFAULT: 'rgb(var(--cream-rgb) / <alpha-value>)',
          dim: 'rgb(var(--cream-dim-rgb) / <alpha-value>)',
        },
        // Sambandha design tokens (also CSS-var backed)
        apple: {
          black: 'var(--apple-black)',
          dark: 'var(--apple-dark)',
          card: 'var(--apple-card)',
          muted: 'var(--apple-muted)',
          secondary: 'var(--apple-secondary)',
          light: 'var(--apple-text)',
          white: '#ffffff',
          gold: 'var(--apple-gold)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        jp: ['var(--font-jp)', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 9vw, 8rem)', { lineHeight: '1.04', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '1.06', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.018em', fontWeight: '600' }],
        'apple-body': ['17px', { lineHeight: '1.65', fontWeight: '400' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'marquee': 'marquee 40s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.4'/></svg>\")",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
