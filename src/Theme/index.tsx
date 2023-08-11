// Below offers the following ability in use:
// <Theme.provider value="retro"><App /></Theme.provider>
// <Theme.provider value={{...} as Theme}><App /></Theme.provider> <-- custom theme thats mapped to the theme type
//
// doing it this way allows for users to extend a default or retro theme if they want to change small things e.g.
// <Theme.provider value={{...retroTheme, ...customThemeChanges}}><App /></Theme.provider>
// but it also lets you users submit "themes" to the repo which can be added in easily with just a theme config file and then applied with the theme name e.g.
// <Theme.provider value="retro"><App /></Theme.provider>

import React from "react";
import { createContext, useContext, useEffect, useMemo } from "react";
import { default as defaultTheme } from "./default";
import { default as retroTheme } from "./retro";

const animationTimingFunctions = {
  bounce: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  fade: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  none: "none",
} as const;

const themeOptions = {
  default: defaultTheme,
  retro: retroTheme,
} as const;

export type AnimationVariant = keyof typeof animationTimingFunctions;
type ThemeType = keyof typeof themeOptions;

// Idea here is that people could use a #hex or rgb() etc but also supply a light and dark color for the theme to use based on OS settings
// we can check if Color extends string to know whether its a string or an object to support dark mode or not
type Color =
  | string
  | {
      light: string;
      dark: string;
    };

type Component = {
  padding: string | number;
  fontSize: string | number;
  borderRadius: string;
};

export type Theme = {
  animaitonType: AnimationVariant;
  colors: {
    primary: {
      text: Color;
      background: Color;
      border: Color;
      placeholder: Color;
    };
    secondary: {
      text: Color;
      background: Color;
      border: Color;
      placeholder: Color;
    };
    danger: {
      text: Color;
      background: Color;
      border: Color;
      placeholder: Color;
    };
    success: {
      text: Color;
      background: Color;
      border: Color;
      placeholder: Color;
    };
  };
  components: {
    button: Component;
    input: Component;
  };
};

const ThemeContext = createContext<Theme>(themeOptions.default);

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  theme?: ThemeType | Theme;
}> = ({ children, theme = "default" }) => {
  const themeConfig = useMemo<Theme>(() => {
    if (typeof theme === "string") {
      return themeOptions[theme];
    }
    return theme;
  }, [theme]);

  useEffect(() => {
    const cssVariables = generateCSSVariablesFromTheme(themeConfig);
    Object.entries(cssVariables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, String(value));
    });
  }, [themeConfig]);

  return (
    <ThemeContext.Provider value={themeConfig}>
      {children}
    </ThemeContext.Provider>
  );
};

// Make hook to use within components
export const useTheme = () => {
  // get the context
  const context = useContext(ThemeContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useTheme was used outside of its Provider");
  }

  // else return the custom theme passed
  return context;
};

// Make function to easily pull out CSS variables from the theme
// e.g. this would make:
// var(--primary-text-light), var(--primary-text-dark), var(--primary-background-light), var(--primary-background-dark), etc
// var(--button-padding), var(--button-fontSize), var(--button-borderRadius), etc
function generateCSSVariablesFromTheme(theme: Theme): React.CSSProperties {
  const cssVariables: { [key: string]: string | number } = {};

  // Generate colors CSS variables
  Object.entries(theme.colors).forEach(([colorKey, colorValue]) => {
    Object.entries(colorValue).forEach(([propertyKey, propertyValue]) => {
      if (typeof propertyValue === "string") {
        cssVariables[`--${colorKey}-${propertyKey}-light`] = propertyValue;
        cssVariables[`--${colorKey}-${propertyKey}-dark`] = propertyValue;
      } else {
        cssVariables[`--${colorKey}-${propertyKey}-light`] =
          propertyValue.light;
        cssVariables[`--${colorKey}-${propertyKey}-dark`] = propertyValue.dark;
      }
    });
  });

  // Generate components CSS variables
  Object.entries(theme.components).forEach(([componentKey, componentValue]) => {
    Object.entries(componentValue).forEach(([propertyKey, propertyValue]) => {
      cssVariables[`--${componentKey}-${propertyKey}`] = propertyValue;
    });
  });

  return cssVariables;
}
