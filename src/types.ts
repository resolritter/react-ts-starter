import { CSSProperties } from "react"

export type AvailableThemes = "light" | "dark"
export type ThemeSettings = "backgroundColor" | "color"
export type Theme = Pick<CSSProperties, ThemeSettings>

export type NamedTheme = {
  name: AvailableThemes
  theme: Theme
}

export type NamedThemeDictionary = {
  [N in AvailableThemes]: { name: N; theme: Theme }
}

// Helper types
export type ValueOf<T> = T[keyof T]
export type RepeatedDictionary<T extends {}> = {
  [K in Extract<ValueOf<T>, string>]: K
}
export type RepeatedUnionDictionary<T extends string> = {
  [K in Extract<T, string>]: K
}
export type MappedExclusive<
  Parent,
  Variant extends Parent,
  ComparedVariant extends Parent,
  MappedType,
  Otherwise = never
> = Variant extends ComparedVariant ? MappedType : Otherwise
