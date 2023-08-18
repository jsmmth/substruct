import React from "react";
import classNames from "classnames";
import css from "./heading.module.css";
import useSizeForBreakpoint from "../../hooks/useSizeForBreakpoint";
import useColorWithVariant from "../../hooks/useColorWithVariant";
import { PropsWithoutRefOrColor } from "../../helpers/types";
import { ColorOrColorWithVariant, Color } from "../../theme/colors";
import { SizeOrResponsiveSize } from "../../theme/sizes";

interface HeadingProps extends PropsWithoutRefOrColor<"h1"> {
  color?: ColorOrColorWithVariant<Color>;
  background?: ColorOrColorWithVariant<Color>;
  size?: SizeOrResponsiveSize;
  weight?: React.CSSProperties["fontWeight"];
}

type HeadingElement =
  | React.ElementRef<"h1">
  | React.ElementRef<"h2">
  | React.ElementRef<"h3">
  | React.ElementRef<"h4">
  | React.ElementRef<"h5">
  | React.ElementRef<"h6">;

export const Heading = React.forwardRef<HeadingElement, HeadingProps>(
  (
    {
      children,
      className,
      color = "base",
      background = "none",
      size = 6,
      weight = "bold",
      style,
    },
    forwardedRef,
  ) => {
    const sizeToHeadingSize: { [key: number]: number } = {
      1: 6,
      2: 5,
      3: 4,
      4: 3,
      5: 2,
      6: 1,
    };

    const { variable: textSize, variant: headingSize } = useSizeForBreakpoint(
      size,
      "heading",
    );
    const Element: any = `h${sizeToHeadingSize[headingSize]}`;
    const textColor = useColorWithVariant(color);
    const bgColor = useColorWithVariant(background, 1);
    const styleVariables = {
      "--text-font-size": textSize,
      "--text-font-weight": weight,
      "--text-color": textColor,
      "--text-background-color": bgColor,
    } as React.CSSProperties;

    return (
      <Element
        ref={forwardedRef}
        className={classNames(css.heading, className)}
        style={{ ...styleVariables, ...style }}
        data-size={size}
        data-color={color}
      >
        {children}
      </Element>
    );
  },
);
