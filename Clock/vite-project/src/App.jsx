import { useState ,useEffect } from 'react'



function App() {


  const [startclock , setClock] =useState(0);
  const [Running ,setRunning] =useState(false)


 
useEffect(() => {
 let value; 
  if(Running){
 value =  setInterval(() => {
       setClock(prev=>prev+1)
  },1000);
  }
  return () => {
    clearInterval(value)
  };
}, [Running]);



  






  return(
    
    <div>
   
   <div>
      {startclock}
      <button onClick={()=>setRunning(true)}>Start</button>
      <button onClick={()=>setRunning(false)}>Stop</button>
  
   </div>
  

    </div>
   

  ) 

}
export default App
