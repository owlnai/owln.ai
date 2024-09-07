import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  shortcuts: {
    magic:
      'bg-clip-text bg-gradient-radial from-cinder-900 via-cinder-400 to-cinder-900 dark:bg-gradient-to-br dark:from-sky-300 dark:to-pink-300 inline-block text-transparent',
      steel:
      'bg-clip-text bg-gradient-radial from-neutral-400 via-neutral-600 to-neutral-700 dark:bg-gradient-to-br dark:from-neutral-200 dark:to-neutral-800 inline-block text-transparent',
  },
  theme: {
    colors: {
      cinder: {
        50: '#f7f5fa',
        100: '#edeaf4',
        200: '#d6d0e7',
        300: '#b1a7d2',
        400: '#8477b9',
        500: '#6656a1',
        600: '#534287',
        700: '#45376d',
        800: '#3b305c',
        900: '#352c4e',
        950: '#100d17',
        1000: '#080812',
      },
    },
  },
  presets: [
    presetUno(),
    presetTypography(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      cdn: 'https://esm.sh/',
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter:400,500,600,700',
        headings: 'Syne:700',
      },
    }),
  ],
})
