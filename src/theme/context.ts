import { Theme, themes } from "Theme";
import { createContext } from "react";

export const ThemeContext = createContext<Theme>(themes.default);
