import { useEffect, useState } from "react";
import { useTheme } from "./useTheme";
import { useMediaQuery } from "./useMediaQuery";
import { SizeOrResponsiveSize, SizeType } from "../theme/sizes";

const useSizeForBreakpoint = (
  size: SizeOrResponsiveSize,
  type: SizeType,
): { variant: number; variable: string } => {
  const theme = useTheme();
  const isSizeNumber = typeof size === "number";

  if (isSizeNumber && size > 0) {
    return { variant: size, variable: `var(--${type}-${size})` };
  } else if (isSizeNumber) {
    return { variant: 0, variable: `0` };
  }

  const [sizeValue, setSize] = useState<number>(size.initial);

  const isExtraSmall = useMediaQuery(
    `(max-width: ${theme.breakpoints.sizes.sm}${theme.breakpoints.unit})`,
  );
  const isSmall = useMediaQuery(
    `(max-width: ${theme.breakpoints.sizes.sm}${theme.breakpoints.unit})`,
  );
  const isMedium = useMediaQuery(
    `(max-width: ${theme.breakpoints.sizes.md}${theme.breakpoints.unit})`,
  );
  const isLarge = useMediaQuery(
    `(max-width: ${theme.breakpoints.sizes.lg}${theme.breakpoints.unit})`,
  );
  const isExtraLarge = useMediaQuery(
    `(max-width: ${theme.breakpoints.sizes.xl}${theme.breakpoints.unit})`,
  );

  useEffect(() => {
    if (isExtraSmall && size.options.xs) {
      return setSize(size.options.xs);
    }

    if (isSmall && size.options.sm) {
      return setSize(size.options.sm);
    }

    if (isMedium && size.options.md) {
      return setSize(size.options.md);
    }

    if (isLarge && size.options.lg) {
      return setSize(size.options.lg);
    }

    if (isExtraLarge && size.options.xl) {
      return setSize(size.options.xl);
    }

    return setSize(size.initial);
  }, [isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge]);

  return { variant: sizeValue, variable: `var(--${type}-${sizeValue})` };
};

export default useSizeForBreakpoint;
