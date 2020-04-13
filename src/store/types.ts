import { RepeatedDictionary } from "../types"

export const actionList = ["INC"] as const

export const actions = Object.values(actionList).reduce(function (acc, value) {
  ;(acc as any)[value] = value
  return acc
}, {}) as RepeatedDictionary<typeof actionList>
