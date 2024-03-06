import { useState, useEffect } from 'react'
import Button from './Button'
import styles from './App.module.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [keyword, setKeyword] = useState('')

  const onClick = () => setCounter((prev) => prev + 1)
  const onChange = (event) => setKeyword(event.target.value)

  console.log('I run all the time.')
  const iRunOnlyOnce = () => {
    console.log('I run only once.')
  }
  useEffect(iRunOnlyOnce, [])
  useEffect(() => {
    console.log('I run when keyowrd changes')
    if (!!keyword && keyword.length > 5) {
      console.log('Search for', keyword)
    }
  }, [keyword])
  useEffect(() => {
    console.log('I run when counter changes')
  }, [counter])
  useEffect(() => {
    console.log('I run when keyowrd & counter changes')
  }, [keyword, counter])

  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <hr />
      <input type="text" value={keyword} placeholder="Search here..." onChange={onChange} />
      <hr />
      <Button text={'Continue'} />
    </div>
  )
}

export default App
