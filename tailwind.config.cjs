/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'dark-gray': '#7D7D7D',
        gray: '#E5E5E5',
        'light-gray': '#F3F3F3',
        'card-overlay': 'rgba(255, 255, 255, 0.5)',
        'btn-black': 'rgba(0, 0, 0, 0.75)',
        overlay: 'rgba(0, 0, 0, 0.85)',
        'btn-black-hover': 'rgba(255, 255, 255, 0.25)'
      }
    },
    fontSize: {
      display: '12.5rem',
      'display-sm': '6.25rem',
      'heading-1': '3.5rem',
      'heading-2': '1.5rem',
      'heading-3': '1.125rem',
      'subhead-1': '0.9375rem',
      'subhead-2': '0.8125rem',
      body: '0.875rem',
      'btn-lg': '0.75rem',
      'btn-md': '0.625rem',
      'btn-sm': '0.5625rem'
    },
    screens: {
      md: '768px',
      xl: '1360px'
    },
    container: {
      center: true
    },
    fontFamily: {
      serif: ['Libre Baskerville', 'serif']
    },
    letterSpacing: {
      'btn-lg': '2.57px',
      'btn-md': '2.14px',
      'btn-sm': '1.93px'
    },
    lineHeight: {
      display: '9.375rem',
      'display-sm': '6.25rem',
      'heading-1': '4rem',
      'heading-2': '1.8125rem',
      'heading-3': '1.375rem',
      'subhead-1': '1.1875rem',
      body: '1.75rem',
      deafult: '1.25'
    },
    backgroundImage: {
      card: 'linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.841672) 100%)'
    }
  },
  plugins: []
}
