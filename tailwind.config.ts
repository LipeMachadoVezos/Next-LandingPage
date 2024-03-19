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
        "header": "url('/backgrounds/header.png')",
        "aboutus": "url('/backgrounds/aboutus.png')",
        "features": "url('/backgrounds/features.png')",
        "team": "url('/backgrounds/team.png')",
        "faq": "url('/backgrounds/faq.png')",
        "footer": "url('/backgrounds/footer.png')",
      },
      boxShadow: {
        '3xl': '10px 3px 30px -10px rgba(0, 0, 0)',
      },
      colors: {
        "yellow": "#F5AA25",
        "yellow-opacity": "#E0A336",
        "red": "#EC6061",
        "red-opacity": "#EC7879"
      }
    },
  },
  plugins: [],
};
export default config;
