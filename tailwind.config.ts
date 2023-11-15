import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#DAD7CD",
        "green-light-1": "#A3B18A",
        "green-light-2": "#588157",
        "green-dark-1": "#3A5A40",
        "green-dark-2": "#344E41",
      },
    },
  },
  plugins: [],
};
export default config;
