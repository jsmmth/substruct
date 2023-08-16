import React from "react";
import { ThemeVariant, Theme } from "Theme";
import { DeepPartial } from "helpers/types";
import useThemeAndSetVariables from "hooks/useThemeAndSetVariables";
import { ThemeContext } from "./context";

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  theme?: ThemeVariant | Theme;
  options?: DeepPartial<Theme>;
  isDarkModeForced?: Boolean;
}> = ({
  children,
  theme = "default",
  options = {},
  isDarkModeForced = false,
}) => {
  const themeConfig = useThemeAndSetVariables(theme, options, isDarkModeForced);
  return (
    <ThemeContext.Provider value={themeConfig}>
      {children}
    </ThemeContext.Provider>
  );
};
