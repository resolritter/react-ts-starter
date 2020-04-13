import { Theme, NamedTheme, NamedThemeDictionary } from "./types"

const baseTheme = {
  fontSize: "16px",
} as const

export const themes: NamedThemeDictionary = {
  light: {
    name: "light",
    theme: {
      ...baseTheme,
      bgColor: "white",
      fgColor: "black",
    },
  },
  dark: {
    name: "dark",
    theme: {
      ...baseTheme,
      bgColor: "black",
      fgColor: "white",
    },
  },
}

export const initialTheme: NamedTheme = themes.light
