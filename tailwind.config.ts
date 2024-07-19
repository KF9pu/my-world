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
          "0%, 50%, 100%": { stroke: "#E08B66" },
          "25%": { stroke: "white" },
        },
        cusPing2: {
          "0%, 10%, 60%, 100%": { stroke: "#E08B66" },
          "35%": { stroke: "white" },
        },
        cusPing3: {
          "0%, 20%, 70%, 100%": { stroke: "#E08B66" },
          "45%": { stroke: "white" },
        },
        cusPing4: {
          "0%, 20%, 70%, 100%": { stroke: "#E08B66" },
          "50%": { stroke: "white" },
        },
        smallBounce: {
          "0%, 100%": { transform: "translateY(-8%)" },
          "70%": { transform: "none" },
        },
        nameBounce: {
          "0%, 100%": { transform: "translateY(-12%) " },
          "70%": { transform: "" },
        },
        em1: {
          "0%, 70%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        em2: {
          "0%, 70%, 100%": { opacity: "1" },
          "53%": { opacity: "0.5" },
        },
        em3: {
          "0%, 70%, 100%": { opacity: "1" },
          "56%": { opacity: "0.5" },
        },
        em4: {
          "0%, 70%, 100%": { opacity: "1" },
          "59%": { opacity: "0.5" },
        },
        em5: {
          "0%, 70%, 100%": { opacity: "1" },
          "62%": { opacity: "0.5" },
        },
      },
      animation: {
        nameBounce: "nameBounce 1s infinite",
        smallBounce: "smallBounce 1s infinite",
        cusPing1: "cusPing1 2s infinite",
        cusPing2: "cusPing2 2s infinite",
        cusPing3: "cusPing3 2s infinite",
        cusPing4: "cusPing4 2s infinite",
        em1: "em1 2s infinite",
        em2: "em2 2s infinite",
        em3: "em3 2s infinite",
        em4: "em4 2s infinite",
        em5: "em5 2s infinite",
      },
      colors: {
        primary: "rgba(245, 169, 127, 1)", // 2024년 올해의 색상 - 피치 퍼즈
        "primary-dark": "rgba(224, 139, 102, 1)", // 어두운 버전
        "primary-light": "rgba(255, 209, 184, 1)", // 밝은 버전
        accent: "#FFE0D6", // 포인트 컬러

        // 대비되는 색상
        "primary-contrast": "#333333", // Primary 배경 대비 텍스트 색상
        "primary-dark-contrast": "#FFFFFF", // Primary Dark 배경 대비 텍스트 색상
        "primary-light-contrast": "#000000", // Primary Light 배경 대비 텍스트 색상
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
