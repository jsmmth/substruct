import React from "react";
import classNames from "classnames";
import css from "./text.module.css";
import useSizeForBreakpoint from "../../hooks/useSizeForBreakpoint";
import useColorWithVariant from "../../hooks/useColorWithVariant";
import { PropsWithoutRefOrColor } from "../../helpers/types";
import { ColorOrColorWithVariant, Color } from "../../theme/colors";
import { SizeOrResponsiveSize } from "../../theme/sizes";

interface TextProps extends PropsWithoutRefOrColor<"p"> {
  children: React.ReactNode;
  color?: ColorOrColorWithVariant<Color>;
  background?: ColorOrColorWithVariant<Color>;
  as?: "p" | "span" | "div";
  size?: SizeOrResponsiveSize;
  weight?: React.CSSProperties["fontWeight"];
}

type TextElement =
  | React.ElementRef<"p">
  | React.ElementRef<"span">
  | React.ElementRef<"div">;
export const Text = React.forwardRef<TextElement, TextProps>(
  (
    {
      children,
      className,
      as = "p",
      color = "base",
      background = "none",
      size = 2,
      weight = "normal",
      style,
    },
    forwardedRef,
  ) => {
    const Element: any = as;
    const textSize = useSizeForBreakpoint(size);
    const textColor = useColorWithVariant(color);
    const bgColor = useColorWithVariant(background, 1);
    const styleVariables = {
      "--text-font-size": `var(--body-${textSize})`,
      "--text-font-weight": weight,
      "--text-color": textColor,
      "--text-background-color": bgColor,
    } as React.CSSProperties;

    return (
      <Element
        ref={forwardedRef}
        className={classNames(css.text, className)}
        style={{ ...styleVariables, ...style }}
        data-size={size}
        data-color={color}
      >
        {children}
      </Element>
    );
  },
);
