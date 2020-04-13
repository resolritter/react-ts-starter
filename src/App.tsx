import * as React from "react"
import { ApplicationState } from "./store/reducer"
import { useSelector } from "react-redux"
import { useRef, useEffect } from "react"
import Button from "src/components/Button"
import z from "zaftig"

const style = z`
  background-color $bgColor
  color $fgColor
`

export type Props = {
  message: string
}
export function App({ message }: Props): JSX.Element {
  return (
    <div className={style.className}>
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
