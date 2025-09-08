import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },

    extend: {
      colors: {
        whiteColor: "var(--white-color)",
        themeColor: "var(--theme-color)",
        blackColor: "var(--black-color)",
        blackColor2: "var(--black-color2)",
        grayColor: "var(--gray-color)",
        paraColor: "var(--paragraph-color)",
        bodyColor: "var(--body-color)",
        blackSoft: "var(--black-soft-color)",
        footerColor: "var(--footer-links-color)",
        footerBorder: "var(--footer-border)",
        footerFieldBg: "var(--footer-field-bg)",
        footerFieldColor: "var(--footer-field-color)",
        footerFieldBorder: "var(--footer-field-border)",
        placeholderColor: "var(--placeholder-color)",
        socialLinkBg: "var(--social-link-bg)",
        headingColor: "var(--heading-color)",
        bdrColor: "var(--bdr-color)",
        fieldBg: "var(--field-bg)",
        fieldColor: "var(--field-color)",
        fieldBorder: "var(--field-border)",
        darkBlueColor: "var(--dark-blue-color)",
        listColor: "var(--list-color)",
        cardBg: "var(--card-bg)",
        clientBg: "var(--client-bg)",
        projectLink: "var(--project-link-color)",
        modalColor: "var(--modal-color)",
      },
    },
  },
  plugins: [],
};

export default config;
