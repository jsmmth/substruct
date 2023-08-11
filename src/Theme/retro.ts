import { type Theme } from "./index";
import defaultTheme from "./default";

// TODO: FIll out this theme
const theme: Theme = {
  ...defaultTheme,
  animaitonType: "fade",
  colors: {
    primary: {
      text: "#000",
      background: "#E0E0E0",
      border: "#000",
      placeholder: "#000",
    },
    secondary: {
      text: {
        light: "#000",
        dark: "#fff",
      },
      background: {
        light: "#fff",
        dark: "#000",
      },
      border: {
        light: "#000",
        dark: "#fff",
      },
      placeholder: {
        light: "#000",
        dark: "#fff",
      },
    },
    danger: {
      text: {
        light: "#000",
        dark: "#fff",
      },
      background: {
        light: "#fff",
        dark: "#000",
      },
      border: {
        light: "#000",
        dark: "#fff",
      },
      placeholder: {
        light: "#000",
        dark: "#fff",
      },
    },
    success: {
      text: {
        light: "#000",
        dark: "#fff",
      },
      background: {
        light: "#fff",
        dark: "#000",
      },
      border: {
        light: "#000",
        dark: "#fff",
      },
      placeholder: {
        light: "#000",
        dark: "#fff",
      },
    },
  },
};

export default theme;
