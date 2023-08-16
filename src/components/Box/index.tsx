import classNames from "classnames";
import React from "react";
import css from "./box.module.css";
import useColorWithVariant from "../../hooks/useColorWithVariant";
import useSizeForBreakpoint from "../../hooks/useSizeForBreakpoint";
import { SizeOrResponsiveSize, Unit } from "../../Theme/sizes";
import { ColorOrColorWithVariant, Color } from "../../Theme/colors";

interface Box extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
  as?: "article" | "aside" | "div" | "footer" | "header" | "main" | "section";
  padding?: 0 | SizeOrResponsiveSize;
  margin?: 0 | SizeOrResponsiveSize;
  borderRadius?: 0 | SizeOrResponsiveSize;
  background?: ColorOrColorWithVariant<Color>;
  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  minHeight?: number;
  unit?: Unit;
  grow?: 0 | 1;
  shrink?: 0 | 1;
}

export const Box: React.FC<Box> = ({
  as = "div",
  padding = 0,
  margin = 0,
  grow = 0,
  shrink = 0,
  borderRadius = 0,
  background = "none",
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  unit = "px",
  style,
  children,
  className,
}) => {
  const Element = as;
  const backgroundColor = useColorWithVariant(background, 1);
  const paddingSize = padding === 0 ? 0 : useSizeForBreakpoint(padding);
  const marginSize = margin === 0 ? 0 : useSizeForBreakpoint(margin);
  const borderRadiusSize =
    borderRadius === 0 ? 0 : useSizeForBreakpoint(borderRadius);
  const styleVariables = {
    "--box-max-width": maxWidth ? `${maxWidth}${unit}` : "none",
    "--box-max-height": maxHeight ? `${maxHeight}${unit}` : "none",
    "--box-min-width": minWidth ? `${minWidth}${unit}` : "none",
    "--box-min-height": minHeight ? `${minHeight}${unit}` : "none",
    "--box-background": backgroundColor,
    "--box-padding": paddingSize == 0 ? 0 : `var(--spacing-${paddingSize})`,
    "--box-margin": marginSize == 0 ? 0 : `var(--spacing-${marginSize})`,
    "---box-border-radius":
      borderRadiusSize == 0 ? 0 : `var(--borderRadius-${borderRadiusSize})`,
    "--box-grow": grow,
    "--box-shrink": shrink,
  } as React.CSSProperties;

  return (
    <Element
      className={classNames(css.box, className)}
      style={{
        ...styleVariables,
        ...style,
      }}
    >
      {children}
    </Element>
  );
};
