import React from "react"
import z from "zaftig"
import { getActiveTheme, useThemeVariable } from "src/theme"
import { updateTheme } from "src/setupTheme"
import { themes, themeKeys } from "src/constants"
import { cssVariableValueOf } from "src/utils"
import { css } from "linaria"

const changeThemeButton = css`
  background-color: ${cssVariableValueOf(themeKeys.backgroundColor)};
  color: ${cssVariableValueOf(themeKeys.color)};
  padding: 16px;
  font-weight: bold;
`

export function Button() {
  const color = useThemeVariable(themeKeys.color)
  return (
    <button
      className={changeThemeButton}
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
