import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      keyframes: ({ colors }) => ({
        rerender: {
          "0%": {
            "border-color": colors.gray[500],
          },
          "50%": {
            "border-color": colors.blue[300],
          },
        },
        highlight: {
          "0%": {
            color: colors.gray[300],
            background: colors.gray[700],
          },
          "50%": {
            color: colors.gray[700],
            background: colors.blue[300],
          },
        },
        "router-cache-highlight": {
          "0%": {
            color: colors.gray[400],
          },
          "50%": {
            color: colors.blue[300],
          },
          "100%": {
            color: colors.gray[400],
          },
        },
      }),
    },
  },
};
export default config;
