/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          10: "var(--base-10)",
          50: "var(--base-50)",
          150: "var(--base-150)",
          350: "var(--base-350)",
          1000: "var(--base-1000)",
        },
      },
      screens: {
        lg: "1024px"
      },
      spacing: {
        1: "2px",
        3: "6px",
        4: "8px",
        6: "12px",
        9: "18px",
        16: "32px",
      },
    },
  },
  plugins: [],
}
