/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily:{
'sans': ['Ubuntu, sans-serif']
    },
    extend: {
      colors: {
        'denim': '#022959',
        'denimLight': '#164A8A',
      'grey': '#9699AA',
      'purple': '#483EFF',
      'purpleLight': '#928CFF',
      'liteGrey': '#D6D9E6',
     }, 
    backgroundImage: {
      'oval': "url(./images/Oval.png)",
      'arcade': "url(./images/Group 11.png)",
      'advanced': "url(./images/Group 12.png)",
      'pro': "url(./images/Group 13.png)",
      'checkboxActive': "url(./images/Group 7@1x.svg)",
      'checkboxNonActive': "url(./images/Rectangle@1x.svg)",
      'confirmImg': "url(./images/Group 2@1x.svg)",
    }
    },
  },
  plugins: [],
}