import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',

    // NEXTUI
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        desktop: '1920px',
        miniMobile: '470px',
      },
      fontFamily: {
        headingExtraLight: ['Heading Pro Trial Extra Light', 'sans-serif'],
        headingLight: ['Heading Pro Trial Light', 'sans-serif'],
        heading: ['Heading Pro Trial', 'sans-serif'],
        headingThin: ['Heading Pro Trial Thin', 'sans-serif'],
        headingBold: ['Heading Pro Trial Bold', 'sans-serif'],
        headingExtraBold: ['Heading Pro Trial Extra Bold', 'sans-serif'],
        headingHeavy: ['Heading Pro Trial Heavy', 'sans-serif'],
        robotoRegular: ['Roboto Regular', 'sans-serif'],
        robotoBold: ['Roboto Bold', 'sans-serif'],
        cloverGroteskBlack: ['Clover Grotesk Black', 'sans-serif'],
        cloverGroteskBlackLight: ['Clover Grotesk Light', 'sans-serif'],
        cloverGroteskBlackRegular: ['Clover Grotesk Regular', 'sans-serif'],
        microsportBold: ['Microsport Bold', 'sans-serif'],
        braked: ['Braked Regular', 'sans-serif'],
        brakedSemibold: ['Braked Semibold', 'sans-serif'],
        brakedBold: ['Braked Bold', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
