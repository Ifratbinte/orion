/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D00B7",
        grayPrimary: "#F7F9FB",
        grayPrimaryLight: "#F2F3F5",
        paragraph: "#696969",
        danger: "#c20505",
        blue: "#2639ED"
      },
      fontFamily: {
        DmSans: ["DM Sans", "sans-serif"],
        integralCF: ["integralCF", "sans-serif"],
      },
      backgroundImage: {
        "hero-bg": "url('/images/hero-bg.png')",
        "overlay-bg": "url('/images/bg-2.png')",
      },
      height: {
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "1000v": "100vh",
        "500" : "500px",
        "440" : "440px",
        "380" : "380px",
      },
      width: {
        "800" : "800px",
        "260" : "260px",
        "370" : "370px"
      },
      letterSpacing: {
        widest: '.55em',
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1400px',
          },
        },
        ".section-gap": {
          padding: "75px 0",
        },
        ".section-gap-b": {
          paddingBottom: "75px",
        },
        ".section-gap-s": {
          padding: "60px",
        },
      })
    }
  ],
};
