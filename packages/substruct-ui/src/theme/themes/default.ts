import { type Theme } from "../index";

const theme: Theme = {
  colors: {
    base: {
      1: {
        light: "#FFFFFF",
        dark: "#000000",
      },
      2: {
        light: "#FFFFFF",
        dark: "#1F1F28",
      },
      3: {
        light: "#ECECEC",
        dark: "#31313E",
      },
      4: {
        light: "#E1E1E1",
        dark: "#636363",
      },
      5: {
        light: "#8B8B8B",
        dark: "#828282",
      },
      6: {
        light: "#000000",
        dark: "#FFFFFF",
      },
    },
    primary: {
      1: {
        light: "#E4EAFF",
        dark: "#2D3D75",
      },
      2: {
        light: "#C9D5FF",
        dark: "#3F5297",
      },
      3: {
        light: "#5E7DED",
        dark: "#A9BCFF",
      },
      4: {
        light: "#395DDD",
        dark: "#CED9FF",
      },
      5: {
        light: "#223C98",
        dark: "#E0E7FD",
      },
      6: {
        light: "#112468",
        dark: "#FBFCFE",
      },
    },
    danger: {
      1: {
        light: "#FFE4E4",
        dark: "#792B2B",
      },
      2: {
        light: "#FFBCBC",
        dark: "#8F3636",
      },
      3: {
        light: "#FA4747",
        dark: "#FF7171",
      },
      4: {
        light: "#C63636",
        dark: "#FFAEAE",
      },
      5: {
        light: "#8D2626",
        dark: "#FFC5C5",
      },
      6: {
        light: "#8D2626",
        dark: "#FFC5C5",
      },
    },
    success: {
      1: {
        light: "#E4FFEA",
        dark: "#175024",
      },
      2: {
        light: "#B9FFC8",
        dark: "#328044",
      },
      3: {
        light: "#73E469",
        dark: "#B7FFB0",
      },
      4: {
        light: "#49BA3F",
        dark: "#D5FFD1",
      },
      5: {
        light: "#2C9723",
        dark: "#E5FFE2",
      },
      6: {
        light: "#2C9723",
        dark: "#E5FFE2",
      },
    },
    warning: {
      1: {
        light: "#FFF6E4",
        dark: "#775718",
      },
      2: {
        light: "#FFEBC3",
        dark: "#B18937",
      },
      3: {
        light: "#FFB74B",
        dark: "#FFD392",
      },
      4: {
        light: "#EE9B1E",
        dark: "#FFE8C7",
      },
      5: {
        light: "#CE8415",
        dark: "#FFEACA",
      },
      6: {
        light: "#CE8415",
        dark: "#FFEACA",
      },
    },
  },
  body: {
    unit: "px",
    sizes: {
      1: 13,
      2: 15,
      3: 17,
      4: 19,
      5: 24,
      6: 32,
    },
  },
  heading: {
    unit: "px",
    sizes: {
      1: 13,
      2: 15,
      3: 17,
      4: 19,
      5: 24,
      6: 32,
    },
  },
  caption: {
    unit: "px",
    sizes: {
      1: 10,
      2: 11,
      3: 13,
      4: 15,
      5: 17,
      6: 24,
    },
  },
  borderRadius: {
    unit: "em",
    sizes: {
      1: 0.5,
      2: 0.5,
      3: 0.5,
      4: 99,
      5: 0,
      6: 0,
    },
  },
  spacing: {
    unit: "px",
    sizes: {
      1: [8, 8],
      2: [12, 12],
      3: [16, 24],
      4: 32,
      5: 40,
      6: 56,
    },
  },
  breakpoints: {
    unit: "px",
    sizes: {
      xs: 520,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1640,
    },
  },
};

export default theme;
