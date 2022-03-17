module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "spin-in": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.3s ease-out",
        spinn: "spin 0.2s linear ",
      },
      screens: {
        mf: "990px",
      },
      flex: {
        2: "2 2 0%",
      },
    },
  },

  plugins: [],
};
