import { ThemeOption, Theme, themes } from "Theme";
import { useMediaQuery } from "./useMediaQuery";
import { useEffect, useMemo } from "react";

const useThemeWithVariables = (theme: ThemeOption | Theme): Theme => {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const themeConfig = useMemo<Theme>(() => {
    if (typeof theme === "string") {
      return themes[theme];
    }
    return theme;
  }, [theme]);

  useEffect(() => {
    const cssVariables: { [key: string]: string } = {};

    Object.entries(themeConfig.typography.body).forEach(
      ([bodyKey, bodyValue]) => {
        cssVariables[`--fontSize-body-${bodyKey}`] = `${
          typeof bodyValue == "number" ? bodyValue : bodyValue[0]
        }${themeConfig.typography.unit}`;
      },
    );

    Object.entries(themeConfig.typography.heading).forEach(
      ([headingKey, headingValue]) => {
        cssVariables[`--fontSize-heading-${headingKey}`] = `${
          typeof headingValue == "number" ? headingValue : headingValue[0]
        }${themeConfig.typography.unit}`;
      },
    );

    Object.entries(themeConfig.borderRadius.size).forEach(
      ([radiusKey, radiusValue]) => {
        cssVariables[`--borderRadius-${radiusKey}`] = `${
          typeof radiusValue == "number"
            ? `${radiusValue}${themeConfig.borderRadius.unit}`
            : radiusValue
                .map((s) => `${s}${themeConfig.borderRadius.unit}`)
                .join(" ")
        }`;
      },
    );

    Object.entries(themeConfig.spacing.size).forEach(
      ([spacingKey, spacingValue]) => {
        cssVariables[`--spacing-${spacingKey}`] = `${
          typeof spacingValue == "number"
            ? `${spacingValue}${themeConfig.spacing.unit}`
            : spacingValue
                .map((s) => `${s}${themeConfig.spacing.unit}`)
                .join(" ")
        }`;
      },
    );

    Object.entries(cssVariables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, String(value));
    });
  }, [themeConfig]);

  useEffect(() => {
    // Generate CSS color variables from theme
    function generateCSSColorsFromTheme(theme: Theme) {
      const cssVariables: { [key: string]: { light: string; dark: string } } =
        {};
      Object.entries(theme.colors).forEach(([colorKey, colorValue]) => {
        Object.entries(colorValue).forEach(([propertyKey, propertyValue]) => {
          if (typeof propertyValue === "string") {
            cssVariables[`--color-${colorKey}-${propertyKey}`] = {
              light: propertyValue,
              dark: propertyValue,
            };
          } else {
            cssVariables[`--color-${colorKey}-${propertyKey}`] = {
              light: propertyValue.light,
              dark: propertyValue.dark,
            };
          }
        });
      });
      return cssVariables;
    }

    // Set colors and switch on dark mode
    Object.entries(generateCSSColorsFromTheme(themeConfig)).forEach(
      ([key, value]) => {
        if (isDarkMode) {
          document.documentElement.style.setProperty(key, String(value.dark));
          return;
        }
        document.documentElement.style.setProperty(key, String(value.light));
      },
    );
  }, [themeConfig, isDarkMode]);

  // Return the theme config
  return themeConfig;
};

export default useThemeWithVariables;
