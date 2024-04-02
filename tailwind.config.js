/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      screens: {
 
        'tablet': '896px',
        // => @media (min-width: 640px) { ... }
  
        'smalltablet': '660px',
      },
    },
  },
  plugins: [],
}

