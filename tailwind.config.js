/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        450: '450px',
        220: '220px',
        280: '280px',
        60: '60px',
      },
      width: {
        220: '220px',
        250: '250px',
        320: '320px',
        500: '500px',
      },
      borderRadius: {
        full: '50%',
      },
      margin: {
        '-10': '-10px',
        '40px': '40px',
        '5px': '5px',
      },
      fontSize: {
        '27px': '27px',
        '60px': '60px',
        '20px': '20px',
        '18px': '18px',
        '32px': '32px',
      },
      spacing: {
        10: '10px',
        3: '3px',
      },
    },
  },
  plugins: [],
};
