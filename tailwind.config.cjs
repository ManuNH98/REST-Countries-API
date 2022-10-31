/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      homepage_items: "14px",
      detail_page: "16px",
    },
    fontWeight: {
      light: 300,
      semi_bold: 600,
      bold: 800,
    },
    colors: {
      dark_blue: "hsl(209, 23%, 22%)",
      very_dark_blue_bg: "hsl(207, 26%, 17%)",
      very_dark_blue_text: "hsl(200, 15%, 8%)",
      dark_gray: "hsl(0, 0%, 52%)",
      very_light_gray_bg: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  plugins: [],
};
