import React from "react";
import classNames from "classnames";
import css from "./tag.module.css";
import { Text } from "../Text";
import { InteractiveColor } from "../../theme/colors";
import { SizeVariant } from "../../theme/sizes";

interface Tag extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  hasBorder?: boolean;
  color?: InteractiveColor;
  customColor?: string;
  customColorShade?: number;
  size?: SizeVariant;
  weight?: React.CSSProperties["fontWeight"];
}

const colorShade = (col: string, amt: number) => {
  col = col.replace(/^#/, "");
  if (col.length === 3)
    col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];

  // @ts-ignore
  let [r, g, b] = col.match(/.{2}/g);
  [r, g, b] = [
    parseInt(r, 16) + amt,
    parseInt(g, 16) + amt,
    parseInt(b, 16) + amt,
  ];

  r = Math.max(Math.min(255, r), 0).toString(16);
  g = Math.max(Math.min(255, g), 0).toString(16);
  b = Math.max(Math.min(255, b), 0).toString(16);

  const rr = (r.length < 2 ? "0" : "") + r;
  const gg = (g.length < 2 ? "0" : "") + g;
  const bb = (b.length < 2 ? "0" : "") + b;

  return `#${rr}${gg}${bb}`;
};

export const Tag: React.FC<Tag> = ({
  children,
  className,
  hasBorder = false,
  color = "primary",
  customColor = undefined,
  customColorShade = 150,
  style,
  size = 1,
  weight = 500,
}) => {
  const styleVariables = {
    "--tag-background-color": customColor
      ? `${colorShade(customColor, customColorShade)}`
      : `var(--color-${color}-1)`,
    "--tag-border-color": customColor ? customColor : `var(--color-${color}-3)`,
    "--tag-text-color": customColor ? customColor : `var(--color-${color}-3)`,
    "--tag-padding": `var(--spacing-${size})`,
    "--tag-border-radius": `var(--borderRadius-${size})`,
    "--tag-border": hasBorder ? `2px solid var(--color-${color}-3)` : "none",
  } as React.CSSProperties;

  return (
    <div
      className={classNames(css.tag, className)}
      style={{
        ...styleVariables,
        ...style,
      }}
    >
      <Text as="span" color="inherit" weight={weight} size={size}>
        {children}
      </Text>
    </div>
  );
};
