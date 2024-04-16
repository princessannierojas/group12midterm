/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorViolet: '#1f1c2f',
      },
      // meetings/index.js/notes
      width: {
        '350': '350px',
      },
      // meetings/index.js/notes
      fontSize: {
        'content29': '29px',
      },
      // meetings/index.js/content
      margin: {
        'n-0.5': '-0.5rem',
      },
      // meetings/index.js/notes
      height: {
        '85vh': '85vh',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontWeight: {
        'hover-bold': '600',
        'extra-bold': '650',
      },
    },
  },
  plugins: [],
};
