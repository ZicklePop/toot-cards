module.exports = {
  content: ['./{app,pages,ui}/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  extends: {
    aspectRatio: {
      'vertical-video': '9 / 16',
    },
  },
}
