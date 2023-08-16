import { useEffect, useMemo } from "react";
import { useMediaQuery } from "./useMediaQuery";
import { DeepPartial } from "../helpers/types";
import { mergeDeep } from "../helpers/objects";
import { ThemeVariant, themes, Theme } from "../Theme";
import { BreakpointVariants, SizeSetting, SizeVariants } from "../Theme/sizes";
import { ColorValue, ColorVariants, colors, Color } from "../Theme/colors";

const convertSizeToCSSVariable = (
  range: SizeSetting<SizeVariants | BreakpointVariants>,
  prefix: string,
): React.CSSProperties => {
  const cssVariables: { [key: string]: string } = {};
  Object.entries(range.sizes).forEach(([rangeKey, rangeValue]) => {
    // TODO: Make a helper function for this
    cssVariables[`--${prefix}-${rangeKey}`] = `${
      typeof rangeValue == "number"
        ? `${rangeValue}${range.unit}`
        : rangeValue.map((s) => `${s}${range.unit}`).join(" ")
    }`;
  });
  return cssVariables;
};

type ColorCSSVariablesType = { [key: string]: { light: string; dark: string } };
function convertColorToCSSVariable(color: Color, variants: ColorVariants) {
  const cssVariables: ColorCSSVariablesType = {};
  Object.entries(variants).forEach(([propertyKey, propertyValue]) => {
    const value = propertyValue as ColorValue;
    cssVariables[`--color-${color}-${propertyKey}`] = {
      light: typeof value === "string" ? value : value.light,
      dark: typeof value === "string" ? value : value.dark,
    };
  });
  return cssVariables;
}

const useThemeAndSetVariables = (
  theme: ThemeVariant | Theme,
  options?: DeepPartial<Theme>,
  isDarkModeForced?: Boolean,
): Theme => {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const themeConfig = useMemo<Theme>(() => {
    if (typeof theme === "string") {
      return mergeDeep(themes[theme], options);
    }
    return mergeDeep(theme, options);
  }, [theme]);

  // useEffect on load because sizes do not change after load
  useEffect(() => {
    const sizeSettings = [
      "body",
      "heading",
      "borderRadius",
      "spacing",
      "breakpoints",
    ] as const;
    const sizeVariables = sizeSettings.map((setting) => {
      return convertSizeToCSSVariable(themeConfig[setting], setting);
    });

    // flatten the array into a single object
    const sizeVariablesObject: { [key: string]: string } = Object.assign(
      {},
      ...sizeVariables,
    );
    Object.entries(sizeVariablesObject).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, String(value));
    });
  }, [themeConfig]);

  useEffect(() => {
    const colorVariables = colors.map((color) => {
      return convertColorToCSSVariable(color, themeConfig.colors[color]);
    });
    const colorVariablesObject: ColorCSSVariablesType = Object.assign(
      {},
      ...colorVariables,
    );
    Object.entries(colorVariablesObject).forEach(([key, value]) => {
      if (isDarkModeForced || isDarkMode) {
        document.documentElement.style.setProperty(key, String(value.dark));
        return;
      }
      document.documentElement.style.setProperty(key, String(value.light));
    });
  }, [themeConfig, isDarkMode, isDarkModeForced]);

  // Return the theme config
  return themeConfig;
};

export default useThemeAndSetVariables;
