/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-primary)',
        surface: 'var(--bg-surface)',
        card: 'var(--bg-card)',
        cardHover: 'var(--bg-card-hover)',
        brand: {
          DEFAULT: 'var(--brand-primary)',
          hover: 'var(--brand-primary-hover)',
          glow: 'var(--brand-glow)',
        },
        textPrimary: 'var(--text-primary)',
        textMuted: 'var(--text-muted)',
        borderBrand: 'var(--border-brand)',
        borderMuted: 'var(--border-muted)',
      },
    },
  },
  plugins: [],
};
