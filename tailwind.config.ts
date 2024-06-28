import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        hover: "hover 4s linear infinite",
        shake: "shake 4s linear infinite",
      },
      keyframes: {
        hover: {
          "0%, 100%": { translate: "0 0" },
          "18%": { translate: "0 4.5%" },
          "25%": { translate: "0 5%" },
          "68%": { translate: "0 -4.5%" },
          "75%": { translate: "0 -5%" },
        },
        shake: {
          "0%, 15%": { rotate: "0deg" },
          "4%": { rotate: "-15deg" },
          "5%": { rotate: "-15deg" },
          "9%": { rotate: "15deg" },
          "10%": { rotate: "15deg" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
