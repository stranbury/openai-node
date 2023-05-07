module.exports = {
  plugins: {
    tailwindcss: {
        content: [
          "./app/**/*.{js,ts,jsx,tsx}", 
          "./components/**/*.{js,ts,jsx,tsx}"],
        theme: {
          extend: {},
        },
        plugins: [require("@tailwindcss/typography"), require("daisyui")],
        daisyui: {
          styled: true,
          themes: ["cupcake", "dark", "cmyk"],
          base: true,
          utils: true,
          logs: true,
          rtl: false,
          prefix: "",
          darkTheme: "dark",
        },
    },
    autoprefixer: {},
  },
}