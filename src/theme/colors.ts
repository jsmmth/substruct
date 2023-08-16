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
