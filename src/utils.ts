import { RepeatedDictionary, RepeatedUnionDictionary } from "./types"
import { zipObject } from "lodash"

const cssVariablePrefix = "--"
export function cssVariableOf(name: string): string {
  return `${cssVariablePrefix}${name}`
}

export function cssVariableValueOf(name: string): string {
  return `var(${cssVariableOf(name)})`
}

export function unionDictionaryOf<T extends string>(
  array: Array<Extract<T, string>>,
): RepeatedUnionDictionary<T> {
  return zipObject(array, array) as RepeatedUnionDictionary<T>
}

export function getRootElement(): typeof document.documentElement {
  return document.documentElement
}
