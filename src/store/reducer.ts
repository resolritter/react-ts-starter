import { Reducer } from "redux"
import { get } from "lodash"
import { actions, Action, ApplicationState } from "./types"

let counter = 0
export default {
  hello: function (state?: ApplicationState["hello"], action?: Action<any>) {
    if (!state) {
      return "Hello, world!"
    }

    switch (action.type) {
      case actions.INC: {
        return `${state} ${++counter}`
      }
    }

    return state
  },
}
