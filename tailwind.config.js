/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        white: '#FFFFFF',
        'light-gray': '#F6F6F6',
        'dark-navy': '#051824',
        'teal-primary': '#18BCB7',
        'teal-light': '#2EE6D6',

        // Derived/Semantic Colors
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--text-muted)',
        'muted-foreground': 'var(--text-light)',
        border: 'var(--border)',

        // Legacy mappings for gradual migration
        brand: {
          DEFAULT: '#18BCB7',
          light: '#2EE6D6',
          dark: '#14A39E',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Space Grotesk', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.35' }],
        'h4': ['1.25rem', { lineHeight: '1.4' }],
        'body': ['1.125rem', { lineHeight: '1.7' }],
        'body-sm': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(5, 24, 36, 0.05)',
        'md': '0 4px 6px -1px rgba(5, 24, 36, 0.07), 0 2px 4px -2px rgba(5, 24, 36, 0.05)',
        'lg': '0 10px 15px -3px rgba(5, 24, 36, 0.08), 0 4px 6px -4px rgba(5, 24, 36, 0.05)',
        'xl': '0 20px 25px -5px rgba(5, 24, 36, 0.1), 0 8px 10px -6px rgba(5, 24, 36, 0.05)',
        'teal': '0 4px 14px rgba(24, 188, 183, 0.25)',
        'teal-lg': '0 8px 25px rgba(24, 188, 183, 0.3)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '200ms',
        'slow': '300ms',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-up': 'fadeUp 0.4s ease-out',
        'slide-in': 'slideIn 0.25s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
