import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import { processedTheme } from "./setupTheme"
import App from "./App"
import z from "zaftig"
import getStoreAndHistory from "./store/setup"
import Color from "color"

z.global(processedTheme)

const { store, history } = getStoreAndHistory()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app"),
)
