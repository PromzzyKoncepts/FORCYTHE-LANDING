/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#030516",
        secondary: "#60A6E7",
        bgsecondary: "#071626"
      },
      fontFamily: {
        legend: ['"lexend"', 'system-ui'],
      },

      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        slowReveal: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "slow-reveal": "slowReveal 2s ease-in-out forwards",
      },
    },

  },
  plugins: [],
}

