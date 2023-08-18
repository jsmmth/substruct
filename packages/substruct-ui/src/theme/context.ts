import { Theme, themes } from "./";
import { createContext } from "react";

export const ThemeContext = createContext<Theme>(themes.default);
