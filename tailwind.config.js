module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensures Tailwind scans the correct files
  ],
  darkMode: 'class', // Enables dark mode using the 'dark' class
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 4s linear infinite", // Slow spin animation
        "bounce-center": "bounce-center 1.5s infinite", // Center bounce animation
      },
      keyframes: {
        "bounce-center": {
          "0%, 100%": { transform: "translateY(0)" }, // Start and end positions
          "50%": { transform: "translateY(-10px)" }, // Mid bounce height
        },
      },
    },
  },
  plugins: [],
};
