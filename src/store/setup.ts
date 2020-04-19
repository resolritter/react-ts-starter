import { applyMiddleware, compose, createStore } from "redux"
import rootReducer, { ApplicationState } from "./reducer"
import { combineReducers } from "redux"

const devToolsComposeExtension = "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"
export default function getStoreAndHistory(initialState?: ApplicationState) {
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
    }),
    initialState as any,
    compose(...enhancers),
  )

  return { store, history }
}
