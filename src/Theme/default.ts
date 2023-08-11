import { type Theme } from "./index";

const baseBorderRadius = "6px";

// TODO: Fill out this theme
const theme: Theme = {
  animaitonType: "bounce",
  colors: {
    primary: {
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
  components: {
    button: {
      padding: "5px 15px",
      fontSize: "16px",
      borderRadius: baseBorderRadius,
    },
    input: {
      padding: "5px 15px",
      fontSize: "16px",
      borderRadius: baseBorderRadius,
    },
  },
};

export default theme;
