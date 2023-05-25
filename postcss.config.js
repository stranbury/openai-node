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
          // styled: true,
          themes: [{
            mytheme: {
            "primary": "#FF7598",
            "secondary": "#75D1F0",
            "accent": "#C07EEC",
            "neutral": "#423F00",
            "base-100": "#FFEE00",        
            "info": "#3ABFF8",          
            "success": "#36D399",
            "warning": "#FBBD23",
            "error": "#F87272",
          },
        }],
          base: true,
          utils: true,
          logs: true,
          rtl: false,
          prefix: "",
          darkTheme: "mytheme",
        },
    },
    autoprefixer: {},
  },
}