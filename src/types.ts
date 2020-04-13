import { CSSProperties } from "react"

export type AvailableThemes = "light" | "dark"

export type Theme = {
  bgColor: CSSProperties["backgroundColor"]
  fgColor: CSSProperties["backgroundColor"]
  fontSize: CSSProperties["fontSize"]
}

export type NamedTheme = {
  name: string
  theme: Theme
}

export type NamedThemeDictionary = {
  [N in AvailableThemes]: { name: N; theme: Theme }
}

