/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    fontSize: {
      xs: 'var(--footnote)',
      sm: 'var(--caption)',
      base: 'var(--body)',
      md: 'var(--heading-6)',
      lg: 'var(--heading-5)',
      'xl': 'var(--heading-4)',
      '2xl': 'var(--heading-3)',
      '3xl': 'var(--heading-2)',
      '4xl': 'var(--heading-1)',
      'display-sm': 'var(--display-sm)',
      'display-md': 'var(--display-md)',
      'display-lg': 'var(--display-lg)',
    },
      colors: {
        red: 'var(--red)',
        yellow: 'var(--yellow)',
        green: 'var(--green)',
        blue: 'var(--blue)',
      }
  },
  plugins: [require("tailwindcss-animate")],
}