module.exports = { content: ["./src/**/*.{js,jsx,ts,tsx}"], theme: { extend: {}, }, plugins: [], }
module.exports = {
    content: [
      './src/**/*.{html,js,jsx}', // Ensure this path is correct
    ],
    darkMode: 'class', // This allows us to toggle dark mode by adding/removing the 'dark' class
    theme: {
      extend: {},
    },
    plugins: [],
  };
  