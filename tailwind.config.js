/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#F5F3EF",
        charcoal: "#2E2E2E",
        moss: "#7A8B7A",
        blush: "#D8A7B1",
        ivory: "#FCFBF8",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        display: ["'Newsreader'", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 20px 50px rgba(46, 46, 46, 0.08)",
        card: "0 12px 32px rgba(46, 46, 46, 0.10)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        glow:
          "radial-gradient(circle at top, rgba(216, 167, 177, 0.22), transparent 38%), radial-gradient(circle at 85% 10%, rgba(122, 139, 122, 0.2), transparent 32%)",
      },
    },
  },
  plugins: [],
};
