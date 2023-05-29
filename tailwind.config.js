const tailwindConfigPx  = require('./tailwind.config.px')
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

// Forms plugin might be missing in the dependent project, used this to avoid of errors
let formsPlugin = undefined

try {
  formsPlugin = require('@tailwindcss/forms')({
    strategy: 'class',
  })
}
catch (err) {
  // Do nothing
}

const forms = formsPlugin ? [formsPlugin] : []

const colorsPex = {
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  blue: {
    50: '#F0F6FD',
    100: '#DAEBFF',
    200: '#B0D3F2',
    300: '#77B8E9',
    400: '#359EE3',
    500: '#0086D6',
    600: '#0074C2',
    700: '#0065A8',
    800: '#005085',
    900: '#003B6B',
  },
  green: {
    50: '#ECFDEC',
    100: '#D1FAD2',
    200: '#A7F3A8',
    300: '#6EE770',
    400: '#34D337',
    500: '#1CB01E',
    600: '#059607',
    700: '#047806',
    800: '#065F07',
    900: '#064E07',
  },
  yellow: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },
  red: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },
}

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,mdx}'],
  prefix: 'twc-',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          ...colorsPex.blue,
          DEFAULT: colors.blue[500],
        },
        info: {
          ...colorsPex.blue,
          DEFAULT: colors.blue[500],
        },
        success: {
          ...colorsPex.green,
          DEFAULT: colors.green[500],
        },
        danger: {
          ...colorsPex.red,
          DEFAULT: colors.red[500],
        },
        warning: {
          ...colorsPex.yellow,
          DEFAULT: colors.yellow[500],
        },
      },
    },
  },
  plugins: [
    ...forms,
  ],
}

