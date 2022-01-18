module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "250px",
      // => @media (min-width: 320px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "992px",
      // => @media (min-width: 992px) { ... }
      lg2: "1120px",
      // => @media (min-width: 1120px) { ... }
      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      boxShadow: {
        1: "inset 0px 2px 2px rgba(10, 31, 68, 0.12);",
        2: "rgb(10 31 68 / 8%) 0px 2px 6px 0px",
      },
      fontSize: {
        subtitle: ["28px", "40px"],
        body: ["14px", "24px"],
        caption: ["12px", "20px"],
      },
      colors: {
        gray: {
          200: "#F7F8F9",
        },
        brand: {
          700: "#0948EA",
        },
        success: "#D9F4EC",
        lightRed: "#FFEAEA",
        blackMedium: "#4E5D78",
        blackDark: "#0A1F44",
        disabled: "#B0B7C3",
      },
    },
  },
  plugins: [],
};
