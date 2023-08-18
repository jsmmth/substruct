export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export type PropsWithoutRefOrColor<T extends React.ElementType> = Omit<
  React.ComponentPropsWithRef<T>,
  "color"
>;
