/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
  ],
}

