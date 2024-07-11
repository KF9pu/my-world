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
      colors: {
        primary: "#F5A97F", // 2024년 올해의 색상 - 피치 퍼즈
        "primary-dark": "#E08B66", // 어두운 버전
        "primary-light": "#FFD1B8", // 밝은 버전
        accent: "#FFE0D6", // 포인트 컬러

        // 대비되는 색상
        "primary-contrast": "#333333", // Primary 배경 대비 텍스트 색상
        "primary-dark-contrast": "#FFFFFF", // Primary Dark 배경 대비 텍스트 색상
        "primary-light-contrast": "#333333", // Primary Light 배경 대비 텍스트 색상
        "accent-contrast": "#222222", // Accent 배경 대비 텍스트 색상

        "primary-shadow": "rgba(0, 0, 0, 0.25)", // Primary 배경 대비 그림자
        "primary-dark-shadow": "rgba(0, 0, 0, 0.25)", // Primary Dark 배경 대비 그림자
        "primary-light-shadow": "rgba(255, 255, 255, 0.25)", // Primary Light 배경 대비 그림자
        "accent-shadow": "rgba(255, 255, 255, 0.25)", // Accent 배경 대비 그림자

        "primary-border": "#333333", // Primary 배경 대비 보더 색상
        "primary-dark-border": "#FFFFFF", // Primary Dark 배경 대비 보더 색상
        "primary-light-border": "#333333", // Primary Light 배경 대비 보더 색상
        "accent-border": "#222222", // Accent 배경 대비 보더 색상
      },
    },
  },
  plugins: [],
};
export default config;
