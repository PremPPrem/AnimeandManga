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
      'loadingLinear' : "linear-gradient(to top, transparent, rgb(255, 193, 7, 0.4))",
    },

    animation: {
      'loading': 'loading 2s linear infinite',
    },

    keyframes: {
      loading: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      }
    },

    boxShadow: {
      'loadingShadow': '0 0 10px #ffc107, 0 0 20px #ffc107, 0 0 30px #ffc107,0 0 40px #ffc107, 0 0 50px #ffc107, 0 0 60px #ffc107, 0 0 70px #ffc107,0 0 80px #ffc107, 0 0 90px #ffc107, 0 0 100px #ffc107',
      // 'cardShadow' : '0.2px 2px 5px rgba(255,193,7,0.4)',
      'miniCardShadow' : '-15px -15px 15px rgba(0,0,0,0.1),5px 5px 5px rgba(255,255,255,0.1),inset -15px -15px 5px rgba(0,0,0,0.1),inset 5px 5px 5px rgba(255,255,255,0.1)',
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
    },

    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'loadingSize': '100px 180px',
    }
  },
  plugins: [],
}
