import classNames from "classnames";
import React from "react";
import css from "./flex.module.css";
import { Unit } from "../../theme/sizes";

interface Flex extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
  display?: "flex" | "inline-flex";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  gap?: number;
  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  minHeight?: number;
  unit?: Unit;
}

export const Flex: React.FC<Flex> = ({
  display = "flex",
  direction = "row",
  wrap = "nowrap",
  justify = "flex-start",
  align = "flex-start",
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  unit = "px",
  gap = 0,
  style,
  children,
  className,
}) => {
  const styleVariables = {
    "--flex-display": display,
    "--flex-direction": direction,
    "--flex-wrap": wrap,
    "--flex-justify": justify,
    "--flex-align": align,
    "--flex-gap": `${gap}${unit}`,
    "--flex-max-width": maxWidth ? `${maxWidth}${unit}` : "none",
    "--flex-max-height": maxHeight ? `${maxHeight}${unit}` : "none",
    "--flex-min-width": minWidth ? `${minWidth}${unit}` : "none",
    "--flex-min-height": minHeight ? `${minHeight}${unit}` : "none",
  } as React.CSSProperties;

  return (
    <div
      className={classNames(css.flex, className)}
      style={{
        ...styleVariables,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
