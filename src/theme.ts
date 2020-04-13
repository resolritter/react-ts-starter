import z from "zaftig"
import { CSSProperties, useState, useEffect } from "react"
import { Theme, NamedTheme, AvailableThemes } from "./types"
import { themes } from "./constants"
import { useId } from "react-id-generator"

let activeTheme: string
export function getActiveTheme() {
  return activeTheme
}
const themeChangedCallbacks = new Map<string, () => void>()

export function useThemeVariable(varName: keyof Theme) {
  const id = useId()[0]
  const [value, setValue] = useState<Theme[typeof varName]>(
    themes[getActiveTheme() as AvailableThemes].theme[varName],
  )
  useEffect(function () {
    themeChangedCallbacks.set(id, function subscription() {
      setValue(themes[getActiveTheme() as AvailableThemes].theme[varName])
    })

    return function unsubscribe() {
      themeChangedCallbacks.delete(id)
    }
  }, [])
  return value
}

export function themeToZaftigString(theme: Theme): string {
  return Object.entries(theme).reduce(function (styleString, [key, value]) {
    return `
      ${styleString}
      $${key} ${value}
    `
  }, "")
}

export function initializeTheme({ name, theme }: NamedTheme) {
  activeTheme = name

  return {
    processedTheme: themeToZaftigString(theme),
    updateTheme: function ({ name, theme }: NamedTheme) {
      // https://css-tricks.com/updating-a-css-variable-with-javascript/
      const root = document.documentElement
      for (const key of Object.keys(theme)) {
        root.style.setProperty(`--${key}`, (theme as any)[key])
      }

      activeTheme = name
      themeChangedCallbacks.forEach(function (wakeUp) {
        wakeUp()
      })
    },
  }
}
