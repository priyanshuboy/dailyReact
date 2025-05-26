import { useState } from 'react'
import './App.css'
import { usePrev } from './hooks/usePrev'

function App() {
  const [count, setCount] = useState(0)
     const prev =  usePrev(count);          
     
     function IncreaseCount(){
      setCount(prev => prev +1);
  }
    
  return (
    <>
    <button onClick={IncreaseCount}>Increase</button>
    <p> { count } </p>      
    <p>pevious value  was {prev}</p>
    </>
  )
}

export default App
