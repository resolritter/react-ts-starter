import { createBrowserHistory } from "history"
import { applyMiddleware, compose, createStore } from "redux"
import { routerMiddleware } from "connected-react-router"
import rootReducer from "./reducer"
import { ApplicationState } from "./types"
import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

const devToolsComposeExtension = "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"
export default function getStoreAndHistory(initialState?: ApplicationState) {
  const history = createBrowserHistory()
  const middleware = [routerMiddleware(history)]

  const enhancers: any[] = []

  if (
    process.env.NODE_ENV !== "production" &&
    window &&
    Object.prototype.hasOwnProperty.call(window, devToolsComposeExtension)
  ) {
    enhancers.push((window as any)[devToolsComposeExtension]())
  }

  const store = createStore(
    combineReducers({
      ...rootReducer,
      router: connectRouter(history),
    }),
    initialState as any,
    compose(applyMiddleware(...middleware), ...enhancers),
  )

  return { store, history }
}
