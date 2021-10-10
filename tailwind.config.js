module.exports = {
  purge: [],
    mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { 
        'titled': 'DM Serif Text, serif',
        'sans': "Inter var, Inter, sans-serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
