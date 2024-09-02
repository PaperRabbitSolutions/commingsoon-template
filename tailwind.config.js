/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {

        'white-glow': '0 0 20px rgba(255, 255, 255, 1)', // Full white shadow effect
      },
      keyframes: {
        
        'move-diagonal': {
          '0%': { transform: 'translate(0, -90px)' },
          '100%': { transform: 'translate(-1500px, 1200px)' }, // Adjust as needed
        },
        'rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'move-diagonal': 'move-diagonal 3s ease-in-out  ', // Duration and timing function
        // 'rotateme': 'rotate 4s linear infinite',
      },
    },
  },
  plugins: [],
}