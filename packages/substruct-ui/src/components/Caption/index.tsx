import React from "react";
import classNames from "classnames";
import { PropsWithoutRefOrColor } from "../../helpers/types";
import { ColorOrColorWithVariant, Color } from "../../theme/colors";
import css from "./caption.module.css";
import useColorWithVariant from "../../hooks/useColorWithVariant";
import { SizeOrResponsiveSize } from "theme/sizes";
import useSizeForBreakpoint from "hooks/useSizeForBreakpoint";

interface CaptionProps extends PropsWithoutRefOrColor<"h6"> {
  color?: ColorOrColorWithVariant<Color>;
  background?: ColorOrColorWithVariant<Color>;
  size?: SizeOrResponsiveSize;
}

type CaptionElement = React.ElementRef<"h6">;
export const Caption = React.forwardRef<CaptionElement, CaptionProps>(
  (
    {
      children,
      color = "inherit",
      background = "none",
      className,
      style,
      size = 2,
      ...props
    },
    forwardedRef,
  ) => {
    const { variable: textSize } = useSizeForBreakpoint(size, "caption");
    const textColor = useColorWithVariant(color);
    const bgColor = useColorWithVariant(background, 1);
    const styleVariables = {
      "--caption-size": textSize,
      "--caption-color": textColor,
      "--caption-background-color": bgColor,
    } as React.CSSProperties;

    return (
      <h6
        ref={forwardedRef}
        className={classNames(css.caption, className)}
        style={{ ...styleVariables, ...style }}
        {...props}
      >
        {children}
      </h6>
    );
  },
);
