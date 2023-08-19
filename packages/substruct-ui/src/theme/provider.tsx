import React from "react";
import { ThemeVariant, Theme } from "./";
import { DeepPartial } from "../helpers/types";
import useThemeAndSetVariables from "../hooks/useThemeAndSetVariables";
import { ThemeContext } from "./context";

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  theme?: ThemeVariant | Theme;
  options?: DeepPartial<Theme>;
  forcedColorPreference?: "light" | "dark";
}> = ({
  children,
  theme = "default",
  options = {},
  forcedColorPreference = undefined,
}) => {
  const themeConfig = useThemeAndSetVariables(
    theme,
    options,
    forcedColorPreference,
  );
  return (
    <ThemeContext.Provider value={themeConfig}>
      {children}
    </ThemeContext.Provider>
  );
};
