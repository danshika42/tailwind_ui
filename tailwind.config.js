module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        "gradient-radial-blue":"radial-gradient(at left center ,#1c2045 , #191c35 , #151620)",
        "gradient-radial-black":"radial-gradient(at left center ,#161723, #131417, #131313)",
        "gradient-linear-blue":"linear-gradient(to right,#7399fb,#a5d9ff)",
      }
    },
  },
  plugins: [],
}
