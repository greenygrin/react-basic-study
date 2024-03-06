import { useState, useEffect } from 'react'

function Hello() {
  useEffect(() => {
    console.log('created :)')
    return () => console.log('destroyed :(')
  }, [])
  // function byFn() {
  //   console.log('bye :)')
  // }
  // function hiFn() {
  //   console.log('hi :)')
  //   return byFn
  // }
  // useEffect(hiFn, [])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing((prev) => !prev)
  return (
    <>
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
      {showing ? <Hello /> : null}
    </>
  )
}

export default App
