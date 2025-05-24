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
        // Light mode
        "light-background": "#fffbee", // New background color
        "light-card": "#fff9e6", // Slightly darker than background for cards
        "light-heading": "#422b0b", // Primary dark brown
        "light-text": "#422b0b", // Same as heading for consistency
        "light-accent": "#eaae40", // Primary accent
        "light-accent-hover": "#c45f2f", // Secondary accent for hover states
        "light-tag-bg": "#9e2c21", // Deep red for tag backgrounds
        "light-tag-text": "#422b0b", // Dark brown for better contrast

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
