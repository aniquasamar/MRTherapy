import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6b536b",
        secondary: "#949d8c",
        accent: "#556b55",
        warmbg: "#f5efe6",
        offwhite: "#fcfbfa",
        darktext: "#2c352d",
      },
    },
  },
  plugins: [],
};
export default config;