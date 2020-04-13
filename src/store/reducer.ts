import { Reducer, Action } from "redux"
import { get } from "lodash"
import { actions } from "./types"

export type ApplicationState = {
  hello: string
}

let counter = 0
export default {
  hello: function (state?: string, action?: Action) {
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
