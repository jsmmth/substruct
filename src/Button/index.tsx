import React from "react";
import classNames from "classnames";
import { AnimationVariant, SizeOption, VariantOption } from "../Theme";
import css from "./button.module.css";
import { Text } from "../Text";

interface Button extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  variant?: VariantOption;
  animation?: AnimationVariant;
  size?: SizeOption;
  weight?: React.CSSProperties["fontWeight"];
}

export const Button: React.FC<Button> = ({
  children,
  className,
  variant = "primary",
  style,
  size = 200,
  weight = "bold",
}) => {
  const styleVariables = {
    "--button-background-color": `var(--color-${variant}-500)`,
    "--button-hover-background-color": `var(--color-${variant}-400)`,
    "--button-text-color": `var(--color-${variant}-0)`,
    "--button-focus-color": `var(--color-${variant}-500)`,
    "--button-padding": `var(--spacing-${size})`,
    "--button-border-radius": `var(--borderRadius-${size})`,
  } as React.CSSProperties;

  return (
    <button
      className={classNames(css.button, className)}
      style={{
        ...styleVariables,
        ...style,
      }}
    >
      <Text
        as="span"
        variant={variant}
        colorVariant={0}
        weight={weight}
        size={size}
      >
        {children}
      </Text>
    </button>
  );
};
