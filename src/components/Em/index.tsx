import React from "react";
import classNames from "classnames";
import { PropsWithoutRefOrColor } from "helpers/types";
import { ColorOrColorWithVariant, Color } from "theme/colors";
import css from "./em.module.css";
import useColorWithVariant from "hooks/useColorWithVariant";

interface EmProps extends PropsWithoutRefOrColor<"em"> {
  children: React.ReactNode;
  color?: ColorOrColorWithVariant<Color>;
  background?: ColorOrColorWithVariant<Color>;
}

type EmElement = React.ElementRef<"em">;
export const Em = React.forwardRef<EmElement, EmProps>(
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
      "--em-color": textColor,
      "--em-background-color": bgColor,
    } as React.CSSProperties;

    return (
      <em
        ref={forwardedRef}
        className={classNames(css.em, className)}
        style={{ ...styleVariables, ...style }}
        {...props}
      >
        {children}
      </em>
    );
  },
);
