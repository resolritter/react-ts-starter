import { initializeTheme } from "./theme"
import { initialTheme } from "./constants"

const { processedTheme, updateTheme } = initializeTheme(initialTheme)

export { processedTheme, updateTheme }
