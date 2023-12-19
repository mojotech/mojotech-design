/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bgDark: "#14111D",
        textLight: "#FFFFFF",
        mkOrange: "#FA4D31",
        angiBlue: "#003359",
        ckPurple: "#BD65DB",
        dowYellow: "#FFED4D",
        mlBlue: "#CFD9ED",
        betterUpPink: "#F7DDE1",
        amicaTeal: "#00A891",
        novaGreen: "#C3EA8B",
        uaGray: "#454545",
        springBlue: "#6A79F9",
        ampBlue: "#325E87",
        bcbsBlue: "#4BB2E5",
        uwBlue: "#125790",
      },
    },
  },
  plugins: [],
};
