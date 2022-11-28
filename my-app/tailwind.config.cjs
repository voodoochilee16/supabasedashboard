/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontfamily:{ 
      // ibmplex: ['IBM Plex Mono', "monospace"]

     },
    extend: {
      // fontfamily:{ 
      //  ibmplex: ['IBM Plex Mono', "monospace"]

      // },

      boxShadow: {
        colored: "0px 7px 16px rgba(229, 110, 72)",
        coloredHover: "0px 16px 25px rgba(229, 110, 72)",
      },
      colors: {
        lavenderIndigo: '#8657e1',
        daisyBush: '#4714a5',
        goldenFizz: '#feff40',
        whisper: '#f9f4f9',
        pastelPurple: '#b2a1bb',
        purple: '#7209b7',
        robinEggBlue: '#00e9c0',
        blueGem: '#3813a0',
        caribbeanGreen: '#1CC6A0',
        scarlet: '#f72f45',
        monsoon: '#777878',
        silver: '#c0c0c0',
        gallery: '#efeaf2',
        caribbeanGreen: '#00ca9e',
        fog: '#decaec',

      },

      zIndex: {
        navBarToggle: 91,
        navBar: 90,
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
