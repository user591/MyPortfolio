/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#f59e0b",
        font: "#0f172a",
      },
      screen: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
