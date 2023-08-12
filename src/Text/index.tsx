import React from "react";
import classNames from "classnames";
import { SizeOption, VariantOption, ColorRangeOption } from "../Theme";
import css from "./text.module.css";

interface Text extends React.ComponentProps<"p"> {
  children: React.ReactNode;
  variant?: VariantOption;
  colorVariant?: ColorRangeOption;
  as?: "p" | "span" | "div";
  size?: SizeOption;
  weight?: React.CSSProperties["fontWeight"];
}

export const Text: React.FC<Text> = ({
  children,
  className,
  as = "p",
  variant = "primary",
  colorVariant = 500,
  size = 200,
  weight = "normal",
  style,
}) => {
  const Element = as;
  const styleVariables = {
    "--text-font-size": `var(--fontSize-body-${size})`,
    "--text-font-weight": weight,
    "--text-color": `var(--color-${variant}-${colorVariant})`,
  } as React.CSSProperties;

  return (
    <Element
      className={classNames(css.text, className)}
      style={{ ...styleVariables, ...style }}
    >
      {children}
    </Element>
  );
};
