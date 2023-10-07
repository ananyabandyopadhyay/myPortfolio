/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
      'ubuntu': ['Pixelify Sans', 'cursive'],
      'courier': ['courier', 'ubuntu', 'sans-serif'],
      'roboto-mono': ['roboto-mono', 'ubuntu', 'sans-serif'],
      'pacifico': ['pacifico','ubuntu', 'sans-serif'],
      'cookie': ['cookie','ubuntu', 'sans-serif'],
      'Shadows Into Light': ['shadows-into-light','ubuntu', 'sans-serif'],
      'dancing-script': ['Dancing Script'],
      'josefin-sans': ['Josefin Sans', 'sans-serif']
    },
  
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'my-image': 'url("/portfolioImage1.jpeg")'
      },
      colors: {
        'primary-blue': '#264858',
        'secondary-blue': '#245f71',
        // 'primary-blue': '#ff0000',
        'primary-yellow': '#7b4b1c',
        'primary-gray': '#606060',
        'secondary-yellow': '#ffa127',
        'primary-bg-yellow': '#d7cfbc',

      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        'lgBanner': '5rem',
        'large': '8rem'
      },
      animation: {
        fadeIn1s: 'fadeIn infinite',
        fadeOut1s: 'fadeOut 1s infinite',
        animation:  '5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
