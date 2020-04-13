import React from "react"
import z from "zaftig"
import { getActiveTheme, useThemeVariable } from "src/theme"
import { updateTheme } from "src/setupTheme"
import { themes } from "src/constants"

const style = z`
  background-color $bgColor
  color $fgColor
  padding 16
  font-weight bold
`

export function Button() {
  const fgColor = useThemeVariable("fgColor")
  console.log(fgColor)
  return (
    <button
      className={style.className}
      onClick={function () {
        const activeTheme = getActiveTheme()
        if (activeTheme == "light") {
          updateTheme(themes.dark)
        } else {
          updateTheme(themes.light)
        }
      }}
    >
      Change the theme
    </button>
  )
}

export default Button
