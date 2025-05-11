/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-background": "#ffffff",
        "light-card": "#f8f9fa",
        "light-heading": "#1a1a1a",
        "light-text": "#2d3748",
        "light-accent": "#2563eb",
        "light-accent-hover": "#1d4ed8",
        "dark-background": "#111827",
        "dark-card": "#1f2937",
        "dark-heading": "#f3f4f6",
        "dark-text": "#e5e7eb",
        "dark-accent": "#60a5fa",
        "dark-accent-hover": "#3b82f6",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "inherit",
            a: {
              color: "inherit",
              "&:hover": {
                color: "inherit",
              },
            },
            strong: {
              color: "inherit",
            },
            h1: {
              color: "inherit",
            },
            h2: {
              color: "inherit",
            },
            h3: {
              color: "inherit",
            },
            h4: {
              color: "inherit",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
