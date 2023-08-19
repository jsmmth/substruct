import {
  ColorOrColorWithVariant,
  Color,
  InteractiveColor,
  ColorVariant,
  BorderWithBorderColor,
  CustomBorderWithOptionalColor,
  cssColorOptions,
  CSSDefaultColorOption,
} from "theme/colors";
import useColorWithVariant from "./useColorWithVariant";
import { useTheme } from "./useTheme";

const buildBorderString = (
  prefix: string,
  border: CustomBorderWithOptionalColor,
  color: string,
) => {
  const styleVariables: { [key: string]: string } = {};
  const sideOptions = ["top", "right", "bottom", "left"];
  // check if the options keys include any of the sideOptions
  if (
    border.options &&
    Object.keys(border.options).some((key) => sideOptions.includes(key))
  ) {
    Object.entries(border.options).forEach(([side, options]) => {
      styleVariables[`--${prefix}-border-${side}`] = `${options?.width ?? 1}${
        options?.unit ?? "px"
      } ${options?.type ?? "solid"} ${color}`;
    });
  } else {
    styleVariables[`--${prefix}-border`] = `${border?.options?.width ?? 1}${
      border?.options?.unit ?? "px"
    } ${border?.options?.type ?? "solid"} ${color}`;
    sideOptions.forEach((side) => {
      styleVariables[`--${prefix}-border-${side}`] = `${
        border?.options?.width ?? 1
      }${border?.options?.unit ?? "px"} ${
        border?.options?.type ?? "solid"
      } ${color}`;
    });
  }

  return styleVariables;
};

export const useBorderForElemment = (
  prefix: string,
  border: BorderWithBorderColor,
  background: ColorOrColorWithVariant<Color | InteractiveColor>,
  defaultBorderColorVariant: ColorVariant = 3,
) => {
  const styleVariables: { [key: string]: string } = {};
  if (!border) {
    styleVariables[`--${prefix}-border`] = "none";
    return styleVariables;
  }

  if ((border as CustomBorderWithOptionalColor).color) {
    const value = border as CustomBorderWithOptionalColor;
    return buildBorderString(
      prefix,
      value,
      useColorWithVariant(value?.color ?? "base", defaultBorderColorVariant),
    );
  }

  const value = border as CustomBorderWithOptionalColor;
  if (typeof background == "string") {
    if (cssColorOptions.includes(background as CSSDefaultColorOption)) {
      const styleVariables: { [key: string]: string } = {};
      if (!border) {
        styleVariables[`--${prefix}-border`] = "none";
        return styleVariables;
      }
    }

    return buildBorderString(
      prefix,
      value,
      useColorWithVariant(background, defaultBorderColorVariant),
    );
  }

  const theme = useTheme();
  if (
    background.variant <
    Object.keys(theme.colors[background.color]).length - 2
  ) {
    return buildBorderString(
      prefix,
      value,
      useColorWithVariant(
        background.color,
        (background.variant + 2) as ColorVariant,
      ),
    );
  }

  if (
    background.variant == Object.keys(theme.colors[background.color]).length
  ) {
    return buildBorderString(
      prefix,
      value,
      useColorWithVariant(
        background.color,
        (background.variant - 2) as ColorVariant,
      ),
    );
  }

  return buildBorderString(
    prefix,
    value,
    useColorWithVariant(background.color, defaultBorderColorVariant),
  );
};
