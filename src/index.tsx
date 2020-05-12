import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import { processedTheme } from "./setupTheme"
import App from "./App"
import z from "zaftig"
import Color from "color"
import { store, history } from "./setup"

z.global(processedTheme)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app"),
)
