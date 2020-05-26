import * as React from "react"
import { ApplicationState } from "src/store/types"
import { useSelector } from "react-redux"
import { useRef, useEffect } from "react"
import Button from "src/components/Button"
import { processedTheme } from "./setupTheme"
import { getRootElement } from "./utils"

export type Props = {
  message: string
}
export function App({ message }: Props): JSX.Element {
  useEffect(function () {
    getRootElement().setAttribute("style", processedTheme)
  }, [])

  return (
    <div>
      <div>{message}</div>
      <Button />
    </div>
  )
}

const MemoizedApp = React.memo(App, function arePropsEqual(
  prevProps,
  nextProps,
) {
  // never updates
  return true
})

function ConnectedApp(): JSX.Element {
  const hello = useSelector(function (s: ApplicationState) {
    return s.hello
  })

  return <MemoizedApp message={hello} />
}

export default ConnectedApp
