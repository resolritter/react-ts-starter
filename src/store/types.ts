import { RepeatedDictionary, ValueOf, MappedExclusive } from "src/types"

export type ActionTypes = "INC"
export const actionList = ["INC"] as const

export const actions = Object.values(actionList).reduce(function (acc, value) {
  ;(acc as any)[value] = value
  return acc
}, {}) as RepeatedDictionary<typeof actionList>

export type BaseAction<T, P> = {
  type: T
  payload: P
}

export type Action<A extends ActionTypes> = MappedExclusive<
  ActionTypes,
  A,
  "INC",
  BaseAction<"INC", {}>
>

export type ApplicationState = {
  hello: string
}
