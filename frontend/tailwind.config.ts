import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // しろ
        'fdfbfa': '#fdfbfa',
        // オレンジ
        'ff8b00': '#ff8b00',
        // 水色
        '1daacd': '#1daacd',
        // 青
        '1977a3': '#1977a3',
        // 藍色
        '263f4b': '#263f4b',
      },
    },
  },
  plugins: [],
};
export default config;
