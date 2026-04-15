import type { Config } from 'tailwindcss'

/**
 * QuestWork Tailwind Configuration
 *
 * Design System:
 *   Primary   #6D28D9 (violet-700)
 *   Secondary #A78BFA (violet-400)
 *   Neutrals  white / gray / black
 *
 * Fonts:
 *   sans → Pretendard (Korean + Latin)
 *   mono → Geist Mono (code)
 *
 * Note: Color tokens are defined as CSS variables in globals.css
 * and referenced here via `var(--color-*)` through Tailwind v4's
 * @theme inline block. This config only extends what's not
 * automatically inferred.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Pretendard is loaded via CDN in layout.tsx <head>
        sans: [
          'Pretendard Variable',
          'Pretendard',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
        mono: ['var(--font-geist-mono)', 'Geist Mono', 'Fira Code', 'monospace'],
      },
      screens: {
        xs: '480px',
      },
      maxWidth: {
        content: '1280px', // max page content width (Upwork-style)
        prose: '720px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      // Quest status badge palette (matches CSS vars)
      colors: {
        quest: {
          open: 'var(--quest-open)',
          'in-progress': 'var(--quest-in-progress)',
          reviewing: 'var(--quest-reviewing)',
          closed: 'var(--quest-closed)',
        },
      },
    },
  },
  plugins: [],
}

export default config
