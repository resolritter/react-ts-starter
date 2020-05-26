import {
  Theme,
  NamedTheme,
  NamedThemeDictionary,
  ThemeSettings,
  ValueOf,
} from "./types"
import { unionDictionaryOf } from "./utils"

export const themes: NamedThemeDictionary = {
  light: {
    name: "light",
    theme: {
      backgroundColor: "white",
      color: "black",
    },
  },
  dark: {
    name: "dark",
    theme: {
      backgroundColor: "black",
      color: "white",
    },
  },
} as const

export const initialTheme: NamedTheme = themes.light

export const themeKeys = unionDictionaryOf<ThemeSettings>([
  "color",
  "backgroundColor",
])
