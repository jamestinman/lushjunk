/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        'ljbrown': '#e6decc',
        'ljbeige': '#f9f4e8',
      },
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],
        serif: ['Merriweather', 'serif']
			}
		}
  },
  plugins: []
};
