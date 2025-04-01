import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        bounceLine: 'scrollBounce 1.5s infinite ease-in-out',
      },
      keyframes: {
        scrollBounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            opacity: '0.3',
          },
          '50%': {
            transform: 'translateY(10px)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
