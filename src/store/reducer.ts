import { Reducer, Action } from "redux"
import { get } from "lodash"

export type ApplicationState = {
  hello: string
}

export default {
  hello: function (state?: string) {
    return state ?? "Hello, world!"
  },
}
