import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  focusRing: "never",
  // primaryColor: '#269D49',
  colors: {
    // Add your color
    fonts: ["#000000", "#FFFFFF"],
    backgrounds: ["FEFCFC"],
    blueGreen: ["#10a37f"],
    lightGray: ["#c5c5d2"],
    coolGray: ["#ececf1"],
  },

  breakpoints: {
    xs: 375,
    sm: 480,
    md: 768,
    lg: 976,
    xl: 1280,
  },

  shadows: {
    // md: '1px 1px 3px rgba(0, 0, 0, .25)',
    // xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
  fontSizes: {
    xs: 16,
    sm: 18,
    md: 20,
    lg: 28,
    xl: 35,
  },
  globalStyles: () => ({
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    a: {
      textDecoration: "none",
      color: "unset",
    },
  }),
};
