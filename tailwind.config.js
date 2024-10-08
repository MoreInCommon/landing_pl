/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "nav-shadow": "0px 1px 12px 0px rgba(34, 64, 153, 0.10)",
        "tile-shadow": "0px 0px 16px 0px rgba(34, 64, 153, 0.10);",
        "footer-shadow": "0px 1px 16px 0px rgba(34, 64, 153, 0.10);",
        "slider-shadow": "0px 0px 32px 0px rgba(1, 50, 13, 0.10);",
      },
      maxWidth: {
        "1/4": "25%",
        "1/3": "33%",
        "1/2": "50%",
        "3/4": "75%",
        standard: "820px",
        full: "1440px",
      },
      spacing: {
        full: "100px",
        tablet: "40px",
        mobile: "20px",
      },
      colors: {
        green: {
          dark: "75C05C",
          light: "#F0F7E9",
          medium: "#B1DBA0",
        },
        purple: {
          dark: "#77539E",
          light: "#EDE5F2",
          medium: "#CEBFDB",
          original: "#9369AA",
        },
        orange: {
          dark: "#F79532",
          light: "#FEF3E3",
          medium: "#FAD6A7",
          original: "#F7A833",
        },
        celadon: {
          dark: "#4A8F9E",
          light: "#E5F4F5",
          medium: "#A6CDD4",
          original: "#60A2B2",
        },
        grey: {
          dark: "#445170",
          light: "#DDE8F6",
          medium: "#97A7BF",
          original: "#1D2330",
        },
        pink: {
          dark: "#EB5873",
          light: "#FCEBF4",
          medium: "#F5B4C2",
          original: "#ED6C84",
        },
        red: {
          dark: "#C11A37",
          light: "#FBE1DD",
          medium: "#DB6D78",
          original: "#CC2D40",
        },
        brand: {
          darkGreen: "#03641b",
          darkBlue: "#224099",
          blue: "#10BEE8",
          green: "#009E59",
        },
        themeableColors: {
          darkBlue: "var(--color-primary)",
          blue: "var(--color-secondary)",
          green: "var(--color-ternary)",
          buttonHover: "var(--button-hover)",
        },
        hover: {
          darkBlue: "#101E47",
          blue: "#008DB2",
          green: "#006B3C",
        },
        mono: {
          neutral11: "#191B20",
          neutral22: "#393939",
          neutral54: "#898989",
        },
      },
      fontSize: {
        h1: ["2rem", "2.5rem"],
        h2: ["1.75rem", "2.875rem"],
        h3: ["1.75rem", "2.875rem"],
        h4: ["1.375rem", "1.875rem"],
        h5: ["1rem", "1.625rem"],
        bodyRegular: ["1.125rem", "1.625rem"],
        bodySmall: ["1rem", "1.625rem"],
        captionRegular: ["1.125rem", "1.75rem"],
        captionSmall: ["1rem", "1.625rem"],
        inputLabel: ["0.875rem", "1.5rem"],
      },
    },
  },
  plugins: [],
};
