/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'vsm': '11px'
      },
      colors: {
        'index-blue': '#00AACE'
      },
      boxShadow: {
        'navbar': '1px 2px 20px #000'
      }

    },
  },
  plugins: [],
}

