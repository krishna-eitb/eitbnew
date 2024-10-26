/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       
        heading: ['Bricolage Grotesque', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      fontWeight: {
        bold: '700', 
      },
      fontSize: {
        
        h1: ['96px', { lineHeight: '96px', letterSpacing: '-0.04em' }], 
        h1Mob: ['32px', { lineHeight: '40px', letterSpacing: '-0.04em' }], 

        h2: ['48px', { lineHeight: '58px', letterSpacing: '-0.04em' }], 
        h2Mob: ['28px', { lineHeight: '36px', letterSpacing: '-0.04em' }],

        h3: ['40px', { lineHeight: '52px', letterSpacing: '-0.04em' }], 
        h3Mob: ['24px', { lineHeight: '32px', letterSpacing: '-0.04em' }], 

        h4: ['32px', { lineHeight: '40px', letterSpacing: '-0.04em' }], 
        h4Mob: ['20px', { lineHeight: '28px', letterSpacing: '-0.04em' }], 

        h5: ['28px', { lineHeight: '36px', letterSpacing: '-0.04em' }], 
        h5Mob: ['18px', { lineHeight: '24px', letterSpacing: '-0.04em' }], 

        h6: ['24px', { lineHeight: '32px', letterSpacing: '-0.04em' }], 
        h6Mob: ['16px', { lineHeight: '22px', letterSpacing: '-0.04em' }], 

        bodyText: ['16px', { lineHeight: '24px' }],
      },
      colors:{
        primary:{
          100:"#D4196E",
          80:"#DD478B",
          60:"#E575A8",
          40:"#EEA3C5",
          20:"#F6D1E2"
        },
        secondary:{
          title:"#090909",
          para:"#3A3A3A",
          caption:"#6B6B6B",
          black40:"#9D9D9D",
          hrline:"#CECECE"
        },
        white:{
          100:"#FFFFFF",
          80:"#FFFFFF80",
          65:"#FFFFFF65",
          40:"#FFFFFF40",
          20:"#FFFFFF20"
        }
      }
    },
  },
  plugins: [],
};
