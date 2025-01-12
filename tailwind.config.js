/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#66328E",
        heading: "#252128",
      },
      fontFamily: {
        poppings: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "1px 3px 2px 2px rgba(37, 33, 40, 0.25);",
        pCard: "2px 0px 30px 0px rgba(110, 117, 136, 0.08);",
      },
    },
  },
  plugins: [],
};
