/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  "./node_modules/flowbite-react/**/*.js",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}"
 ],
 theme: {
  screens: {
   xxs: "280px",
   xs: "320px",
   sm: "480px",
   md: "768px",
   lg: "991px",
   xl: "1440px",
   xxl: "1920px"
  },

  container: {
   center: true, //to apply mx-auto
   padding: "16px",
   screens: {
    // sm: "600px",
    // md: "728px",
    // lg: "984px",
    // xl: "1240px",
    xl: "1296px",
    xxl: "1536px"
   }
  },
  colors: {
   primary: "#22C55E",
   Gray: "#556987",
   "Gray-900": "#2A3342",
   "White-900": "#FFFFFF",
   "Gray-400": "#8896AB",
   "Gray-300": "#BBC3CF",
   "Gray-050": "#F7F8F9",
   "Primary-100": "#DCFCE7",
   "Gray-500": "#556987",
   "Gray-bg": "#1f2733",
   "Gray-800": "#333F51"
  },
  extend: {
   backgroundImage: {
    "left-top": "url('/src/assets/icons/left-bottom.svg')",
    "left-bottom": "url('/src/assets/icons/left-bottom.svg')",
    "right-top": "url('/src/assets/icons/right-top.svg')",
    "right-bottom": "url('/src/assets/icons/right-bottom.svg')",
    BGWave: "url('/src/assets/icons/BGWave.svg')"
   }
  }
 },

 plugins: [require("flowbite/plugin")]
}
