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
        // Champagne theme (Light mode)
        "light-background": "#FFF9F0", // Soft champagne background
        "light-card": "#FFF5E6", // Lighter champagne for cards
        "light-heading": "#1A120B", // Darker brown for headings (WCAG AA compliant)
        "light-text": "#2C1810", // Rich brown for text (WCAG AA compliant)
        "light-accent": "#8B6B4F", // Darker champagne gold accent for better contrast
        "light-accent-hover": "#6B4F3B", // Even darker for hover states
        "light-tag-bg": "#E5D5C3", // Light champagne for tag backgrounds
        "light-tag-text": "#1A120B", // Darker brown for tag text

        // Dog Food theme (Dark mode)
        "dark-background": "#1A120B", // Darker brown background
        "dark-card": "#2C1810", // Deep brown for cards
        "dark-heading": "#F5E6D3", // Light champagne for headings
        "dark-text": "#E5D5C3", // Soft champagne for text
        "dark-accent": "#D4A373", // Warm orange accent
        "dark-accent-hover": "#E6B17E", // Lighter orange for hover
        "dark-tag-bg": "#3D2415", // Dark brown for tag backgrounds
        "dark-tag-text": "#F5E6D3", // Light champagne for tag text
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
