import React, { useMemo } from "react";
import classNames from "classnames";
import css from "./button.module.css";
import { Text } from "../Text";
import useSizeForBreakpoint from "../../hooks/useSizeForBreakpoint";
import { InteractiveColor } from "../../theme/colors";
import { SizeOrResponsiveSize } from "../../theme/sizes";

type ButtonVariant = "solid" | "soft" | "outline";

interface Button extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  hasBorder?: boolean;
  variant?: ButtonVariant;
  color?: InteractiveColor;
  size?: SizeOrResponsiveSize;
  borderRadius?: SizeOrResponsiveSize;
  weight?: React.CSSProperties["fontWeight"];
}

const getButtonStylesForVariant = (
  variant: ButtonVariant,
  color: InteractiveColor,
) => {
  switch (variant) {
    case "solid":
      return {
        "--button-background-color": `var(--color-${color}-3)`,
        "--button-hover-background-color": `var(--color-${color}-4)`,
        "--button-border-color": `var(--color-${color}-4)`,
        "--button-text-color": `var(--color-base-1)`,
        "--button-focus-color": `var(--color-${color}-5)`,
      };
    case "soft":
      return {
        "--button-background-color": `var(--color-${color}-1)`,
        "--button-hover-background-color": `var(--color-${color}-2)`,
        "--button-border-color": `var(--color-${color}-3)`,
        "--button-text-color": `var(--color-${color}-3)`,
        "--button-focus-color": `var(--color-${color}-3)`,
      };
    case "outline":
      return {
        "--button-background-color": `transparent`,
        "--button-hover-background-color": `var(--color-${color}-1)`,
        "--button-border-color": `var(--color-${color}-3)`,
        "--button-text-color": `var(--color-${color}-3)`,
        "--button-focus-color": `var(--color-${color}-5)`,
      };
  }
};

export const Button: React.FC<Button> = ({
  children,
  className,
  hasBorder = false,
  color = "primary",
  variant = "solid",
  style,
  size = 2,
  borderRadius = undefined,
  weight = 500,
}) => {
  const buttonSize = useSizeForBreakpoint(size);
  const borderRadiusSize = useSizeForBreakpoint(borderRadius ?? size);
  const variantStyles = getButtonStylesForVariant(variant, color);
  const styleVariables = useMemo(
    () => ({
      ...variantStyles,
      "--button-padding": `var(--spacing-${buttonSize})`,
      "--button-border-radius": `var(--borderRadius-${borderRadiusSize})`,
      "--button-border":
        hasBorder || variant === "outline"
          ? `2px solid ${variantStyles["--button-border-color"]}`
          : "none",
    }),
    [buttonSize, borderRadiusSize, hasBorder, variantStyles],
  );

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
        color="inherit"
        weight={weight}
        size={buttonSize as SizeOrResponsiveSize}
      >
        {children}
      </Text>
    </button>
  );
};
