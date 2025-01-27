/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          600: '#2BD6BE',
          blue : "#1D2864",
          sky: '#2AD2C1'
        },
       
      },
      animation: {
        "fade-in": "fadeIn  ease-in-up",
        "fade-in-up": "fadeInUp  ease-in-up",
        "slide-left": "slideLeft  ease-in-up",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 1 },
          "100%": { opacity: 1.5 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(-10px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
    },
    dropShadow: {
      "3xl": "4px 3px #2FECAF",
      "4xl": [
        "0 35px 35px rgba(0, 0, 0, 0.25)",
        "0 45px 65px rgba(0, 0, 0, 0.15)",
      ],
      blueRight: "10px 0px 10px rgba(0, 123, 255, 1)", // Adjusted definition
    },
    keyframes: {
      upDown: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-20px)" },
      },
      shakeScale: {
        "0%, 100%": { transform: "translateX(0) scale(1)" },
        "50%": { transform: "rotate(-10deg) scale(1.1)" },
        "75%": { transform: "rotate(10deg) scale(1.05)" },
      },
    },
    animation: {
      upDown: "upDown 2s ease-in-out infinite",
      shakeScale: "shakeScale 0.8s infinite",
    }
  },
  plugins: [],
}

}