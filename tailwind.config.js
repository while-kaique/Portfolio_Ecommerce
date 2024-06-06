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
      backgroundImage: {
        'productTestImage': 'url("/images/imagem_teste.webp")',
        'logo_footer1' : 'url("/images/logo_footer1.png")',
        'logo_footer2' : 'url("/images/logo_footer2.png")',
      }

    },
  },
  plugins: [],
}

