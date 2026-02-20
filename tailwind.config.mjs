/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // The deep midnight background from the logo
        'void': '#020617',      
        // The bright silver/white for text and glowing accents
        'silver': '#f8fafc',    
        // The muted blue-gray for subtext
        'ghost': '#94a3b8',     
        // The electric blue glow from the logo's "energy"
        'electric': '#38bdf8',  
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // A cleaner, more modern font matches that logo better
      }
    },
  },
  plugins: [],
}