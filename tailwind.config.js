/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SourceSans3: ['Source Sans 3', 'sans-serif'],
        Poppins:['Poppins', 'sans-serif']
      },
      colors: {
        slateblue: '#6a5ad5',
        dslateblue: '#76d',
        mediumslateblue:'#78f'
      },
    },
  },
  plugins: [],
}

