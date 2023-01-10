module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      danger: {
        main: "#FF3236",
        100: "#DB2438",
        200: "#B71938",
        300: "#930F35",
        400: "#FF6F65",
        500: "#FF9783",
        600: "#FFC0AD",
        700: "#FFE3D6",
        800: "#FFEEE6",
        900: "#381D1D",
      },
      bgColor: {
        100: "#ACADC1",
        200: "#D6D6E1",
        300: "#F0F0F5",
        400: "#FFFFFF",
        500: "#000000",
        600: "#121212",
        700: "#4b587c",
      },
      text: {
        100: "#26273B",
        200: "#454560",
        300: "#6F708B",
        400: "#FFFFFF",
        500: "#838383",
        600: "#D8D8D8",
      },
    },
    extend: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [],
};
