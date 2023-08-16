import React, { useMemo } from "react";
import classNames from "classnames";
import css from "./button.module.css";
import { Text } from "../Text";
import useSizeForBreakpoint from "../../hooks/useSizeForBreakpoint";
import { InteractiveColor } from "../../theme/colors";
import { SizeOrResponsiveSize } from "../../theme/sizes";
import LoadingSpinner from "components/LoadingSpinner";

type ButtonVariant = "solid" | "soft" | "outline";

interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  hasBorder?: boolean;
  isLoading?: boolean;
  variant?: ButtonVariant;
  color?: InteractiveColor;
  size?: SizeOrResponsiveSize;
  borderRadius?: SizeOrResponsiveSize;
  weight?: React.CSSProperties["fontWeight"];
  LoadingElement?: React.ReactNode;
}

const getButtonStylesForVariant = (
  variant: ButtonVariant,
  color: InteractiveColor,
) => {
  switch (variant) {
    case "solid":
      return {
        "--button-background-color": `var(--color-${color}-4)`,
        "--button-hover-background-color": `var(--color-${color}-3)`,
        "--button-border-color": `var(--color-${color}-5)`,
        "--button-text-color": `var(--color-base-1)`,
        "--button-focus-outline-color": `var(--color-${color}-5)`,
        "--button-focus-background-color": `var(--color-${color}-3)`,
        "--button-active-background-color": `var(--color-${color}-5)`,
        "--button-disabled-background-color": `var(--color-base-3)`,
        "--button-disabled-text-color": `var(--color-base-5)`,
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

type ButtonElement = React.ElementRef<"button">;
export const Button = React.forwardRef<ButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      hasBorder = false,
      isLoading = false,
      color = "primary",
      variant = "solid",
      style,
      size = 2,
      borderRadius = undefined,
      weight = 700,
      disabled,
      LoadingElement = LoadingSpinner,
      ...props
    },
    forwardedRef,
  ) => {
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
            ? `2px solid ${
                disabled
                  ? `var(--color-base-4)`
                  : variantStyles["--button-border-color"]
              }`
            : "none",
      }),
      [buttonSize, borderRadiusSize, hasBorder, variantStyles, disabled],
    );

    return (
      <button
        {...props}
        disabled={disabled || isLoading}
        ref={forwardedRef}
        className={classNames(css.button, className, {
          [css.isLoading]: isLoading,
        })}
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
        <span className={css.button__loadingContainer}>
          <LoadingSpinner size={size} />
        </span>
      </button>
    );
  },
);
