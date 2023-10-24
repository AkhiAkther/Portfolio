import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors:{
      mainColor:"#108fa6"
     },
     boxShadow: {
      '3xl': '0 0 2rem #fff,inset 0 0 1rem #fff, 0 0 2rem #108fa6'
      ,
      
      
      
    }
    },
  },
  plugins: [],
}
export default config
