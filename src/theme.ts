import { CSSProperties, useState, useEffect } from "react"
import { Theme, NamedTheme, AvailableThemes, ThemeSettings } from "./types"
import { themes } from "./constants"
import { useId } from "react-id-generator"
import { cssVariableOf, getRootElement } from "./utils"

let activeTheme: AvailableThemes
export function getActiveTheme() {
  return activeTheme
}
const themeChangedListeners = new Map<
  string,
  (theme: AvailableThemes) => void
>()

export function useThemeVariable(varName: ThemeSettings) {
  const id = useId()[0]
  const [value, setValue] = useState<Theme[typeof varName]>(
    themes[getActiveTheme() as AvailableThemes].theme[varName],
  )
  useEffect(function() {
    themeChangedListeners.set(id, function subscription() {
      setValue(themes[getActiveTheme() as AvailableThemes].theme[varName])
    })

    return function unsubscribe() {
      themeChangedListeners.delete(id)
    }
  }, [])
  return value
}

export function themeToStyle(theme: Theme): string {
  return Object.entries(theme).reduce(function(accumulator, [key, value]) {
    return `
      ${accumulator}
      ${cssVariableOf(key)}: ${value};
    `
  }, "")
}

export function initializeTheme({ name, theme }: NamedTheme) {
  activeTheme = name

  return {
    processedTheme: themeToStyle(theme),
    updateTheme: function({ name, theme }: NamedTheme) {
      const root = getRootElement()
      for (const key of Object.keys(theme)) {
        root.style.setProperty(`${cssVariableOf(key)}`, (theme as any)[key])
      }

      activeTheme = name
      themeChangedListeners.forEach(function(notify) {
        notify(activeTheme)
      })
    },
  }
}
