import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        cusPing1: {
          "0%, 100%": { stroke: "#FFC300" },
          "50%": { stroke: "black" },
        },
        cusPing2: {
          "0%, 100%": { stroke: "#FFB300" },
          "60%": { stroke: "black" },
        },
        cusPing3: {
          "0%, 100%": { stroke: "#FFA300" },
          "70%": { stroke: "black" },
        },
        cusPing4: {
          "0%, 100%": { stroke: "#FF9200" },
          "80%": { stroke: "black" },
        },
      },
      animation: {
        cusPing1: "cusPing1 2s infinite",
        cusPing2: "cusPing2 2s infinite",
        cusPing3: "cusPing3 2s infinite",
        cusPing4: "cusPing4 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
