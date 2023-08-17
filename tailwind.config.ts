import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        light: "1px 1px rgb(89, 89, 89)",
      },
      colors: {
        "cool-red": "#FE6D79",
        "cool-green": "#00C39A",
        "cool-yellow": "#FFBF3C",
        "cool-black": "#1E1B1E",
      },
    },
  },
  plugins: [],
};
export default config;
