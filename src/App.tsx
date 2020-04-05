import * as React from "react"
import { ApplicationState } from "./store/reducer"
import { useSelector } from "react-redux"

function App(): JSX.Element {
  const hello = useSelector(function (s: ApplicationState) {
    return s.hello
  })
  return <div>{hello}</div>
}

export default App
