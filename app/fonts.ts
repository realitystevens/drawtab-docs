import { Inter, Bricolage_Grotesque } from 'next/font/google'

// Matches drawtab.app's brand pairing: Inter for body copy, Bricolage
// Grotesque for headings/display text (see drawtab.app/tailwind.config.js
// `fontFamily.sans` / `fontFamily.display`). Self-hosted via next/font
// instead of a runtime Google Fonts <link> so there's no external request
// (and no render-blocking/FOUC) on every page load.
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
})
