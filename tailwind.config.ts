import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#a07820',
          'gold-light': '#edde7f',
          'gold-medium': '#b29243',
          charcoal: '#1c1e23',
          white: '#ffffff',
          black: '#000000',
        },
        primary: {
          50: '#fef9ec',
          100: '#fcefc9',
          200: '#f9de8f',
          300: '#f5c854',
          400: '#f0b32b',
          500: '#dfa01a',
          600: '#a07820', // brand gold
          700: '#7d5918',
          800: '#684719',
          900: '#583b19',
        },
        charcoal: {
          50: '#f6f6f7',
          100: '#e1e2e4',
          200: '#c4c5c9',
          300: '#9fa1a6',
          400: '#7c7e85',
          500: '#64666c',
          600: '#515359',
          700: '#45474b',
          800: '#3c3d41',
          900: '#1c1e23', // brand charcoal
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(160, 120, 32, 0.08)',
        'premium-lg': '0 10px 40px rgba(160, 120, 32, 0.12)',
        'premium-xl': '0 20px 60px rgba(160, 120, 32, 0.15)',
        'charcoal': '0 4px 20px rgba(28, 30, 35, 0.1)',
        'charcoal-lg': '0 10px 40px rgba(28, 30, 35, 0.15)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #a07820 0%, #edde7f 100%)',
        'gradient-gold-subtle': 'linear-gradient(135deg, #a07820 0%, #b29243 100%)',
        'gradient-charcoal': 'linear-gradient(180deg, #1c1e23 0%, #2a2c31 100%)',
        'gradient-premium': 'linear-gradient(135deg, #1c1e23 0%, #a07820 100%)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
