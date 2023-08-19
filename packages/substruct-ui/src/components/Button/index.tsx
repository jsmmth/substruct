import React, { useMemo } from "react";
import classNames from "classnames";
import css from "./button.module.css";
import { Text } from "../Text";
import useSizeForBreakpoint from "../../hooks/useSizeForBreakpoint";
import { BorderWithBorderColor, InteractiveColor } from "../../theme/colors";
import { SizeOrResponsiveSize } from "../../theme/sizes";
import LoadingSpinner from "components/LoadingSpinner";
import { useBorderForElemment } from "hooks/useBorderForElement";

type ButtonVariant = "solid" | "soft" | "outline";

interface ButtonProps extends React.ComponentProps<"button"> {
  border?: BorderWithBorderColor;
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
        "--button-text-color": `var(--color-${color}-3)`,
        "--button-focus-color": `var(--color-${color}-3)`,
      };
    case "outline":
      return {
        "--button-background-color": `transparent`,
        "--button-hover-background-color": `var(--color-${color}-1)`,
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
      border = false,
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
    const { variable: buttonSize, variant: buttonSizeVariant } =
      useSizeForBreakpoint(size, "spacing");
    const { variable: borderRadiusSize } = useSizeForBreakpoint(
      borderRadius ?? size,
      "borderRadius",
    );
    const borderVariables = useBorderForElemment(
      "button",
      border,
      color,
      variant == "solid" ? 5 : 3,
    );
    const variantStyles = getButtonStylesForVariant(variant, color);
    const styleVariables = useMemo(
      () => ({
        ...variantStyles,
        "--button-padding": buttonSize,
        "--button-border-radius": borderRadiusSize,
        ...borderVariables,
      }),
      [buttonSize, borderRadiusSize, variantStyles, disabled, borderVariables],
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
        data-color={color}
        data-size={size}
      >
        <Text
          as="span"
          color="inherit"
          weight={weight}
          size={buttonSizeVariant as SizeOrResponsiveSize}
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
