import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { processedTheme } from "./setupTheme"
import App from "./App"
import z from "zaftig"
import getStoreAndHistory from "./store/setup"
import Color from "color"

z.global(processedTheme)

const { store, history } = getStoreAndHistory()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app"),
)
