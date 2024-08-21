import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue: "#4C5FD5",
        Gray: "#DADBF1",
        btnColor:"#818EFF",
        btnHover:"#4C6EF9",
      },
    },
  },
  plugins: [],
};
export default config;
