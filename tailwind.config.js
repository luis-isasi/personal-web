const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        19: '4.75rem',
        21: '5.25rem',
        23: '5.75rem',
        25: '6.25rem',
        27: '6.75rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        42: '10.5rem',
        45: '11.25rem',
        46: '11.5rem',
        47: '11.75rem',
        49: '12.25rem',
        50: '12.5rem',
        54: '13.5rem',
        58: '14.5rem',
        62: '15.5rem',
        76: '19rem',
        82: '20.5rem',
        84: '21rem',
        86: '21.5rem',
        88: '22rem',
        90: '22.5rem',
        92: '23rem',
        94: '23.5rem',
        98: '27rem',
        100: '30rem',
        102: '32rem',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '2/4': '50%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        xl: '38rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '85rem',
        '9xl': '90rem',
      },
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
        ...theme('height'),
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
      }),
      colors: {
        gradient: {
          start: '#7aaaff',
          end: '#ffb8b8',
        },
        dark: {
          DEFAULT: '#070E27',
          primary: '#181830',
          secondary: '#212142',
          light: '#2f3253',
        },
        base: {
          main: {
            DEFAULT: '#181B32',
            80: 'rgba(24,27,50,0.8)',
          },
          light: {
            DEFAULT: '#1D2559',
            'dark-mode': '#2C2F48',
          },
          lighter: {
            DEFAULT: '#878FB8',
            'dark-mode': '#393C57',
            16: 'rgba(135, 143, 184, 0.16)',
            24: 'rgba(135,143,184,0.24)',
          },
        },
      },
      borderRadius: {
        circle: '50%',
      },
      borderWidth: {
        1: '1px',
        3: '3px',
        5: '5px',
        6: '6px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
      },
      zIndex: {
        '-2': '-2',
        '-4': '-4',
        '-6': '-6',
        '-8': '-8',
        '-10': '-10',
        '-12': '-12',
        2: '2',
        4: '4',
        6: '6',
        8: '8',
        12: '12',
        14: '14',
        16: '16',
        18: '18',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'appear-rotating': 'rotate 0.1s ease-in-out',
        'fade-in': 'fadeIn 1.3s ease-in-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(22px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        rotate: {
          '0%': {
            transform: 'rotate(90deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
      },
      scale: {
        0: '0',
        25: '.25',
        50: '.5',
        75: '.75',
        80: '.8',
        85: '.85',
        90: '.9',
        95: '.95',
        100: '1',
        105: '1.05',
        110: '1.1',
        125: '1.25',
        150: '1.5',
        200: '2',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        'gradient-primary': '@apply  bg-red-500',
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }),
  ],
}
