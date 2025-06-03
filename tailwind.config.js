/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "light-nord": {
          primary: "#5e81ac", // Nord10 - Blue
          "primary-content": "#eceff4", // Nord6 - Light gray
          secondary: "#81a1c1", // Nord9 - Light blue
          "secondary-content": "#2e3440", // Nord0 - Dark gray
          accent: "#88c0d0", // Nord8 - Bright blue
          "accent-content": "#2e3440", // Nord0
          neutral: "#4c566a", // Nord3 - Gray
          "neutral-content": "#eceff4", // Nord6
          "base-100": "#eceff4", // Nord6 - Lightest gray (main bg)
          "base-200": "#e5e9f0", // Nord5 - Light gray
          "base-300": "#d8dee9", // Nord4 - Medium light gray
          "base-content": "#2e3440", // Nord0 - Dark text
          info: "#81a1c1", // Nord9
          "info-content": "#2e3440", // Nord0
          success: "#a3be8c", // Nord14 - Green
          "success-content": "#2e3440", // Nord0
          warning: "#ebcb8b", // Nord13 - Yellow
          "warning-content": "#2e3440", // Nord0
          error: "#bf616a", // Nord11 - Red
          "error-content": "#eceff4", // Nord6
        },
      },
      "dark", // Keep dark theme as fallback
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
  },
};
