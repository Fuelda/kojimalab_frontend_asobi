module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: { max: "767px" },
    },

    extend: {
      colors: {
        bgGray: "#F0F0F0",
        bgYello: "#e0ff00",
      },
      fontFamily: {
        ja: [],
        zen: ["Zen Old Mincho"],
      },
      spacing: {
        "100vw": "100vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
