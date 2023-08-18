import { useMemo } from "react";
import {
  ColorOrColorWithVariant,
  Color,
  InteractiveColor,
  ColorVariant,
  cssColorOptions,
  CSSDefaultColorOption,
} from "../theme/colors";

const useColorWithVariant = <C extends Color | InteractiveColor>(
  color: ColorOrColorWithVariant<C>,
  variant: ColorVariant = 6,
): string => {
  const value = useMemo(() => {
    const colorIsString = typeof color === "string";
    // if the color variant is a css color option
    if (
      colorIsString &&
      cssColorOptions.includes(color as CSSDefaultColorOption)
    ) {
      return color;
      // if the color is a color variant string
    } else if (colorIsString) {
      return `var(--color-${color}-${variant})`;
    }
    return `var(--color-${color.color}-${color.variant})`;
  }, [color]);
  return value;
};

export default useColorWithVariant;
