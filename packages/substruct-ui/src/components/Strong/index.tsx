import React from "react";
import classNames from "classnames";
import { PropsWithoutRefOrColor } from "../../helpers/types";
import { ColorOrColorWithVariant, Color } from "../../theme/colors";
import css from "./strong.module.css";
import useColorWithVariant from "../../hooks/useColorWithVariant";

interface StrongProps extends PropsWithoutRefOrColor<"strong"> {
  children: React.ReactNode;
  color?: ColorOrColorWithVariant<Color>;
  background?: ColorOrColorWithVariant<Color>;
}

type StrongElement = React.ElementRef<"strong">;
export const Strong = React.forwardRef<StrongElement, StrongProps>(
  (
    {
      children,
      color = "inherit",
      background = "none",
      className,
      style,
      ...props
    },
    forwardedRef,
  ) => {
    const textColor = useColorWithVariant(color);
    const bgColor = useColorWithVariant(background, 1);
    const styleVariables = {
      "--strong-color": textColor,
      "--strong-background-color": bgColor,
    } as React.CSSProperties;

    return (
      <strong
        ref={forwardedRef}
        className={classNames(css.strong, className)}
        style={{ ...styleVariables, ...style }}
        {...props}
      >
        {children}
      </strong>
    );
  },
);
