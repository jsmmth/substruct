import useColorWithVariant from "hooks/useColorWithVariant";
import useSizeForBreakpoint from "hooks/useSizeForBreakpoint";
import React from "react";
import { ColorOrColorWithVariant, Color } from "theme/colors";
import { SizeOrResponsiveSize, SizeVariant } from "theme/sizes";
import css from "./loading.module.css";
import classNames from "classnames";
import { PropsWithoutRefOrColor } from "helpers/types";
import { useTheme } from "hooks/useTheme";

interface LoadingSpinnerProps extends PropsWithoutRefOrColor<"svg"> {
  color?: ColorOrColorWithVariant<Color>;
  size?: SizeOrResponsiveSize;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 3,
  color = "base",
  className,
  style,
}) => {
  const theme = useTheme();
  const loadingSize = useSizeForBreakpoint(size);
  const loadingColor = useColorWithVariant(color, 5);
  const viewBoxSize = theme.body.sizes[loadingSize as SizeVariant] as number;
  const styleVariables = {
    "--loading-scale": `${viewBoxSize / 24}`,
    "--loading-color": loadingColor,
  } as React.CSSProperties;

  return (
    <svg
      width={24}
      height={24}
      stroke="#000"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(css.loading, className)}
      viewBox="0 0 24 24"
      style={{ ...styleVariables, ...style }}
    >
      <g>
        <circle
          cx="12"
          cy="12"
          r="9.5"
          fill="none"
          stroke-width="3"
          stroke-linecap="round"
        >
          <animate
            attributeName="stroke-dasharray"
            dur="1.5s"
            calcMode="spline"
            values="0 150;42 150;42 150;42 150"
            keyTimes="0;0.475;0.95;1"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            dur="1.5s"
            calcMode="spline"
            values="0;-16;-59;-59"
            keyTimes="0;0.475;0.95;1"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
            repeatCount="indefinite"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="2s"
          values="0 12 12;360 12 12"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
};

export default LoadingSpinner;
