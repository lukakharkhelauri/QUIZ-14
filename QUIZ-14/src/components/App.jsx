import { useState } from 'react'
import Quiz from './Quiz'
import classes from '../modules/Index.module.scss'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={classes['app']}>
        <Quiz/>
      </div>
    </>
  )
}

export default App
