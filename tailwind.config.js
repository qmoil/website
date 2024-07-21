import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      'medium': '550px',
      "mdPro":"870px",
      "mdLite": "970px",
      ...defaultTheme.screens,
    },
    color: {
      'blue200': '#1C1B42'
    },
    fontFamily:{
      nunito: ["Nunito", "sans-serif"],
      sourceSan: ["Source Sans 3", "sans-serif"],
      grotesk: ["Familjen Grotesk", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

