/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          playwrite: ['"Playwrite IN"', '"Playwrite VN"', 'sans-serif'], // Add your custom font
        },
      },
    },
    plugins: [
        require('daisyui'),
      ],
  }