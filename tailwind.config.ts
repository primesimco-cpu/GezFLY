import type {Config} from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ink-deep': '#0B1320',
        'ink-2': '#13243A',
        ink: '#101A2B',
        gold: '#9A7B36',
        'gold-bright': '#C9A45C',
        'gold-soft': '#E3CFA1',
        porcelain: '#F3F0E9',
        surface: '#FBFAF6',
        ivory: '#F1EDE4',
        warm: '#5A554B',
        muted: '#8C99A8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {DEFAULT: '2px'},
    },
  },
  plugins: [],
} satisfies Config;
