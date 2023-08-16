import { Colors } from "./colors";
import { BreakpointVariants, SizeSetting, SizeVariants } from "./sizes";
import defaultTheme from "./themes/default";

export const themes = {
  default: defaultTheme,
  // TOOD: Add more themes here for people to choose from
} as const;

export type ThemeVariant = keyof typeof themes;

export type Theme = {
  colors: Colors;
  body: SizeSetting<SizeVariants>;
  heading: SizeSetting<SizeVariants>;
  borderRadius: SizeSetting<SizeVariants>;
  spacing: SizeSetting<SizeVariants>;
  breakpoints: SizeSetting<BreakpointVariants>;
};
