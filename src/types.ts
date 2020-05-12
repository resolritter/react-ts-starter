import { CSSProperties } from "react"

export type AvailableThemes = "light" | "dark"

export type Theme = {
  bgColor: CSSProperties["backgroundColor"]
  fgColor: CSSProperties["color"]
  fontSize: CSSProperties["fontSize"]
}

export type NamedTheme = {
  name: string
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
export type MappedExclusive<
  Parent,
  Variant extends Parent,
  ComparedVariant extends Parent,
  MappedType,
  Otherwise = never
> = Variant extends ComparedVariant ? MappedType : Otherwise
