/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#000000',
          soft: '#333333',
        },
        paper: '#ffffff',
        primary: {
          DEFAULT: '#C8102E',
          soft: '#F6D6DA',
        },
        gold: {
          DEFAULT: '#C8102E',
          soft: '#F6D6DA',
        },
        bridge: {
          DEFAULT: '#C8102E',
          soft: '#F6D6DA',
        },
        accent: {
          DEFAULT: '#000000',
          soft: '#333333',
        },
        muted: '#6B6B6B',
        line: '#E6E6E6',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
}
