/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#4299E1",
        gray: { light: "#4A5568", dark: "#4A5568" },
        footer: "#2D3748",
        underFooter: "#1A202C",
        blue: { dark: "#001b79" },
      },
    },
  },
  plugins: [],
};
