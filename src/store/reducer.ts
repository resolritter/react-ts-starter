import { Reducer, Action } from "redux"
import { get } from "lodash"

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
      case "INC_HELLO": {
        return `${state} ${++counter}`
      }
    }

    return state
  },
}
