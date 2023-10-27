import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("olive")

  return (
    <>
      <div class= "w-full"
      style={{backgroundColor:count}}
      >
        <h1>background change with button</h1>
        <br/>
        <div class= "btn">
          <button onClick={() => setCount("red")} style={{backgroundColor: 'red'}}>red</button>
        <button onClick={() => setCount("#830d6f")} style={{backgroundColor: '#830d6f'}}>red</button>
        <button onClick={() => setCount("#83540d")} style={{backgroundColor: '#83540d'}}>red</button>
        <button onClick={() => setCount("#0d8350")} style={{backgroundColor: '#0d8350'}}>red</button>
        <button onClick={() => setCount("#653737")} style={{backgroundColor: '#653737'}}>red</button>
        <button onClick={() => setCount("yellow")} style={{backgroundColor: 'yellow'}}>yellow</button>
        <button onClick={() => setCount("#ac933c")} style={{backgroundColor: '#ac933c'}}>brown</button>
        <button onClick={() => setCount("#4b9523")} style={{backgroundColor: '#4b9523'}}>light green</button>
        
        </div>
        
         </div>
    </>
  )
}

export default App
