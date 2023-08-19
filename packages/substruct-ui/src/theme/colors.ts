import { Unit } from "./sizes";

export type ColorValue =
  | string
  | {
      light: string;
      dark: string;
    };

export type ColorVariants = {
  1: ColorValue;
  2: ColorValue;
  3: ColorValue;
  4: ColorValue;
  5: ColorValue;
  6: ColorValue;
};

export const colors = [
  "base",
  "primary",
  "danger",
  "success",
  "warning",
] as const;

export type Color = (typeof colors)[number];
export type InteractiveColor = Exclude<Color, "base">;
export type Colors = { [key in Color]: ColorVariants };
export type ColorVariant = keyof ColorVariants;

type ColorWithVariant = { color: Color; variant: ColorVariant };

export const cssColorOptions = ["inherit", "transparent", "none"] as const;
export type CSSDefaultColorOption = (typeof cssColorOptions)[number];

export type ColorOrColorWithVariant<C extends Color | InteractiveColor> =
  | C
  | CSSDefaultColorOption
  | ColorWithVariant;

export type BorderOptions = {
  width?: number;
  unit?: Unit;
  type?: "solid" | "dashed" | "dotted" | "inset" | "outset";
};

export type CustomBorderWithOptionalColor = {
  color?: ColorOrColorWithVariant<Color>;
  options: BorderOptions | { [key: string]: BorderOptions };
};
export type BorderWithBorderColor = boolean | CustomBorderWithOptionalColor;
