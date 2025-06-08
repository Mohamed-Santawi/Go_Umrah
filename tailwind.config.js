/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(0)", opacity: "0.8" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh)", opacity: "0" },
        },
      },
      animation: {
        floatUp: "floatUp 20s linear infinite",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      colors: {
        // Corrected from `color` to `colors`
        main: "#0c8a4d", // Use as text-text-color in Tailwind
      },
    },
  },
  plugins: [],
};
