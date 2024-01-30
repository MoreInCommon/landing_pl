/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      colors: {
        green: {
          dark: "#87BD68",
          light: "#F2F7EA",
          medium: "#BAD9A6",
        },
        purple: {
          dark: "#71579A",
          light: "#ECE6F1",
          medium: "#CCC0D9",
          original: "#8D6DA6",
        },
        orange: {
          dark: "#EB9949",
          light: "#FDF3E5",
          medium: "#F5D7AD",
          original: "#EDAA4D",
        },
        celadon: {
          dark: "#5A8E9C",
          light: "#E8F4F5",
          medium: "#AECCD3",
          original: "#E8F4F5",
        },
        grey: {
          dark: "#46526E",
          light: "#DFE8F5",
          medium: "#9AA7BD",
          original: "#1E232F",
        },
        pink: {
          dark: "#DB6275",
          light: "#F9ECF4",
          medium: "#ECB7C2",
          original: "#DE7485",
        },
        brand: {
          darkBlue: "#264394",
          blue: "#54BCE4",
          green: "#469B60",
        },
        mono: {
          neutral11: "#191B20",
          neutral22: "#393939",
          neutral54: "#898989",
        },
      },
      fontSize: {
        h1: ["2rem"],
        h2: ["1.75rem", "2.25rem"],
        h3: ["1.75rem", "2.25rem"],
        h4: ["1.375rem", "1.5rem"],
        h5: ["1rem", "1.25rem"],
        bodyRegular: ["1.125rem", "1.75rem"],
        bodySmall: ["1rem", "0.75rem"],
        captionRegular: ["1.125rem", "1rem"],
        captionSmall: ["1rem", "1rem"],
      },
    },
  },
  plugins: [],
};
