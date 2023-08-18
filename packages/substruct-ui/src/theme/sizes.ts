export type SizeVariants = {
  1: number | number[];
  2: number | number[];
  3: number | number[];
  4: number | number[];
  5: number | number[];
  6: number | number[];
};

export type BreakpointVariants = {
  xs: number; // small tablets/phones
  sm: number; // tablets
  md: number; // laptops
  lg: number; // desktops
  xl: number; // large desktops
};

export type SizeVariant = keyof SizeVariants;
export type BreakpointVariant = keyof BreakpointVariants;

export type ResponsiveSize = {
  initial: SizeVariant;
  options: Partial<BreakpointVariants>;
};
export type SizeOrResponsiveSize = 0 | SizeVariant | ResponsiveSize;
export type Unit = "px" | "rem" | "em" | "vh" | "vw";
export type SizeSetting<S extends SizeVariants | BreakpointVariants> = {
  unit: Unit;
  sizes: S;
};

export const sizeTypes = [
  "body",
  "heading",
  "borderRadius",
  "spacing",
  "breakpoints",
] as const;

export type SizeType = (typeof sizeTypes)[number];
