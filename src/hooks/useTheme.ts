import { ThemeContext } from "Theme/context";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme was used outside of its Provider");
  }

  return context;
};
