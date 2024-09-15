/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        custom: "1296px", // Custom max-width
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#1C1817",
        secondary: "#4F4B48",
        accent: "#100D30",
      },
      letterSpacing: {
        heading: "-4px",
        subHeading: "-2px",
      },
      fontSize: {
        xxl: "62px",
      },
      boxShadow: {
        custom: "0 10px 20px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        default: "16px",
      },
      backgroundColor: {
        blue: "#594FFE",
        orange: "#FE5401",
      },
      lineHeight: {
        heading: "82.8px",
        subHeading: "58.8px",
        primary: "27.2px",
        xxl: "71.3px",
      },
      backgroundImage: {
        "custom-image": "url('./src/assets/Hero-Images/Background.png')",
        "custom-gradient":
          "linear-gradient(136.19deg, #FBCCB8 0%, #594FFE 50.48%, #FFFFFF 98.99%)",
        "gradient-features":
          "linear-gradient(113.14deg, #FFFFFD 10.26%, #FDEBE3 90.59%)",
      },
    },
  },
  plugins: [],
};
