import React from "react";
import classNames from "classnames";
import { PropsWithoutRefOrColor } from "../../helpers/types";
import { ColorOrColorWithVariant, Color } from "../../theme/colors";
import css from "./blockquote.module.css";
import useColorWithVariant from "../../hooks/useColorWithVariant";
import { SizeOrResponsiveSize } from "../../theme/sizes";
import useSizeForBreakpoint from "../../hooks/useSizeForBreakpoint";

interface BlockquoteProps extends PropsWithoutRefOrColor<"blockquote"> {
  children: React.ReactNode;
  color?: ColorOrColorWithVariant<Color>;
  borderRadius?: SizeOrResponsiveSize;
}

type BlockquoteElement = React.ElementRef<"blockquote">;
export const Blockquote = React.forwardRef<BlockquoteElement, BlockquoteProps>(
  (
    {
      children,
      color = "primary",
      className,
      style,
      borderRadius = 0,
      ...props
    },
    forwardedRef,
  ) => {
    const quoteColor = useColorWithVariant(color, 1);
    const { variable: quoteBorderRadius } = useSizeForBreakpoint(
      borderRadius,
      "borderRadius",
    );
    const styleVariables = {
      "--blockquote-color": quoteColor,
      "--blockquote-border-radius": quoteBorderRadius,
    } as React.CSSProperties;

    return (
      <blockquote
        ref={forwardedRef}
        className={classNames(css.blockquote, className)}
        style={{ ...styleVariables, ...style }}
        {...props}
      >
        {children}
      </blockquote>
    );
  },
);
