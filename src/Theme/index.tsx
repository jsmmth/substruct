import React from "react";
import { createContext, useContext } from "react";
import defaultTheme from "./themes/default";
import useThemeWithVariables from "hooks/useThemeWithVariables";

const animationTimingFunctions = {
  bounce: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  fade: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  none: "none",
} as const;

export const themes = {
  default: defaultTheme,
  // TOOD: Add more themes here for people to choose from
  // minimal: minimalTheme,
  // retro: retroTheme,
} as const;

export type AnimationVariant = keyof typeof animationTimingFunctions;
export type ThemeOption = keyof typeof themes;

// Idea here is that people could use a #hex or rgb() etc but also supply a light and dark color for the theme to use based on OS settings
// we can check if Color extends string to know whether its a string or an object to support dark mode or not
type ColorSetting = {
  light: string;
  dark: string;
};

type ColorValue = string | ColorSetting;

type ColorRange = {
  0: ColorValue;
  100: ColorValue;
  200: ColorValue;
  300: ColorValue;
  400: ColorValue;
  500: ColorValue;
};

export type ColorRangeOption = keyof ColorRange;

type SizeRange = {
  100: number | number[];
  200: number | number[];
  300: number | number[];
  400: number | number[];
  500: number | number[];
  600: number | number[];
};

export type SizeOption = keyof SizeRange;

export type Theme = {
  animaitonType: AnimationVariant;
  colors: {
    base: ColorRange;
    primary: ColorRange;
    secondary: ColorRange;
    danger: ColorRange;
    success: ColorRange;
    warning: ColorRange;
  };
  typography: {
    unit: "px" | "rem" | "em"; // TODO: Add support for other units
    body: SizeRange;
    heading: SizeRange;
  };
  borderRadius: {
    unit: "px" | "rem" | "em"; // TODO: Add support for other units
    size: SizeRange;
  };
  spacing: {
    unit: "px" | "rem" | "em"; // TODO: Add support for other units
    size: SizeRange;
  };
};

export type VariantOption = keyof Theme["colors"];

const ThemeContext = createContext<Theme>(themes.default);

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  theme?: ThemeOption | Theme;
}> = ({ children, theme = "default" }) => {
  const themeConfig = useThemeWithVariables(theme);

  return (
    <ThemeContext.Provider value={themeConfig}>
      {children}
    </ThemeContext.Provider>
  );
};

// Make hook to use within components
export const useTheme = () => {
  // get the context
  const context = useContext(ThemeContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useTheme was used outside of its Provider");
  }

  // else return the custom theme passed
  return context;
};
