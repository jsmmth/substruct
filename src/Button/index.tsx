import React from "react";
import classNames from "classnames";
import { AnimationVariant } from "../Theme";
import style from "./button.module.css";

interface Button extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  animationVariant?: AnimationVariant;
}

export const Button: React.FC<Button> = ({ children, className }) => {
  return (
    <button className={classNames(style.button, className)}>{children}</button>
  );
};
