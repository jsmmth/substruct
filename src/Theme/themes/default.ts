import { type Theme } from "../index";

const theme: Theme = {
  animaitonType: "bounce",
  colors: {
    base: {
      0: {
        light: "#FFFFFF",
        dark: "#2F2F2F",
      },
      100: {
        light: "#FFFFFF",
        dark: "#242424",
      },
      200: {
        light: "#EEEEEE",
        dark: "#0E0E0E",
      },
      300: {
        light: "#E4E4E4",
        dark: "#111111",
      },
      400: {
        light: "#BABABA",
        dark: "#828282",
      },
      500: {
        light: "#000000",
        dark: "#FFFFFF",
      },
    },
    primary: {
      0: {
        light: "#FFFFFF",
        dark: "#000000",
      },
      100: {
        light: "#F9F9F9",
        dark: "#111111",
      },
      200: {
        light: "#EBEBEB",
        dark: "#181818",
      },
      300: {
        light: "#DFDFDF",
        dark: "#575757",
      },
      400: {
        light: "#BABABA",
        dark: "#828282",
      },
      500: {
        light: "#000000",
        dark: "#FFFFFF",
      },
    },
    secondary: {
      0: {
        light: "#000000",
        dark: "#FFFFFF",
      },
      100: {
        light: "#FFFFFF",
        dark: "#111111",
      },
      200: {
        light: "#EBEBEB",
        dark: "#181818",
      },
      300: {
        light: "#F6F6F6",
        dark: "#000000",
      },
      400: {
        light: "#EDEDED",
        dark: "#414141",
      },
      500: {
        light: "#D6D6D6",
        dark: "#434343",
      },
    },
    danger: {
      0: {
        light: "#FFFFFF",
        dark: "#FFFFFF",
      },
      100: {
        light: "#FFE5E5",
        dark: "#593232",
      },
      200: {
        light: "#FFD9D9",
        dark: "#611717",
      },
      300: {
        light: "#BB8484",
        dark: "#844848",
      },
      400: {
        light: "#DA8686",
        dark: "#C77171",
      },
      500: {
        light: "#F84141",
        dark: "#EC1E1E",
      },
    },
    success: {
      0: {
        light: "#49AD38",
        dark: "#C0FFAA",
      },
      100: {
        light: "#F8FFF6",
        dark: "#3B4A38",
      },
      200: {
        light: "#E0FFD9",
        dark: "#334A2E",
      },
      300: {
        light: "#9FD49A",
        dark: "#9FD49A",
      },
      400: {
        light: "#8DDA86",
        dark: "#60995B",
      },
      500: {
        light: "#68F151",
        dark: "#38A825",
      },
    },
    warning: {
      0: {
        light: "#9D763C",
        dark: "#FFFFFF",
      },
      100: {
        light: "#FFF6DF",
        dark: "#4E401D",
      },
      200: {
        light: "#FFE1C5",
        dark: "#604731",
      },
      300: {
        light: "#D4BA9A",
        dark: "#7B5426",
      },
      400: {
        light: "#EBAD64",
        dark: "#996C38",
      },
      500: {
        light: "#FFC42D",
        dark: "#F5BF34",
      },
    },
  },
  typography: {
    unit: "px",
    body: {
      100: 18,
      200: 16,
      300: 14,
      400: 11,
      500: 10,
      600: 7,
    },
    heading: {
      100: 32,
      200: 24,
      300: 19,
      400: 17,
      500: 15,
      600: 13,
    },
  },
  borderRadius: {
    unit: "px",
    size: {
      100: 12,
      200: 6,
      300: 6,
      400: 6,
      500: 2,
      600: 2,
    },
  },
  spacing: {
    unit: "px",
    size: {
      100: [16, 35],
      200: [12, 25],
      300: [10, 15],
      400: [8, 10],
      500: [6, 5],
      600: [4, 5],
    },
  },
};

export default theme;
