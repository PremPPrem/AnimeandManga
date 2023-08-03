/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: { 
        'amber-custom':  '#FFC107',
        
    },

    backgroundImage: {
      'headImage': "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))",
      'ContactButton':"linear-gradient(144deg,#ffa500, #ff4500 50%,#ffa500)",
      'ContactButtonHover': " linear-gradient(144deg,#ed9121, #ff5e 50%,#ed9121)"
    },
    },
    screens: {
      '2xl': {'max': '1536px'},
      // => @media (max-width: 1535px) { ... }
  
      'xl': {'max': '1280px'},
      // => @media (max-width: 1279px) { ... }
  
      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }
  
      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }
  
      'sm': {'max': '640px'},
      // => @media (max-width: 639px) { ... }
      'fold': {'max': '300px'},
    }
  },
  plugins: [],
}
