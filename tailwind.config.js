/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./node_modules/primereact/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#00B894',
        'secondary-color': '#55efc4',
      },
    },
  },
  plugins: [],
};
