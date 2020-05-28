import * as React from "react"
import { Route, Switch } from "react-router"
import { ApplicationState } from "src/store/types"
import { useSelector } from "react-redux"
import { useRef, useEffect } from "react"
import Button from "src/components/Button"
import { processedTheme } from "./setupTheme"
import { getRootElement } from "./utils"

export type Props = {
  message: string
}
export function App(): JSX.Element {
  const hello = useSelector(function(s: ApplicationState) {
    return s.hello
  })

  useEffect(function() {
    getRootElement().setAttribute("style", processedTheme)
  }, [])

  return (
    <div>
      <div>{hello}</div>
      <Button />
    </div>
  )
}

function ConnectedApp(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route
        component={function NotFound() {
          return <div>404</div>
        }}
      />
    </Switch>
  )
}

export default ConnectedApp
