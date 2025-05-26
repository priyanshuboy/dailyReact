import { useState } from 'react'
import {BrowserRouter ,Routes,Route ,Link ,useNavigate, Outlet, redirect} from 'react-router-dom'
import { useRef } from 'react'


function App() {


  const Ref =useRef() 
  
  function Read(){
    Ref.current.focus()
  } 



  return(

    <div>
<BrowserRouter>
  <Routes>
    <Route path='/' element ={<Layout/>}/>
     <Route path='/neet/class-11-online-coaching' element ={<Class11/>}/>
     <Route path='/neet/class-12-online-coaching' element ={<Class12/>}/>   
    </Routes>     

</BrowserRouter>
<div>
     <input ref={Ref} type='text' placeholder='enter your name'></input>
     <input type='text' placeholder='entern your agr'></input> 
    <button onClick={Read}>Submit</button>   

</div>

</div>
  )
}






function Layout(){
   const nav = useNavigate()

   function redirecttohome(){
    nav('/')

   }
  
  return (
<div>
      <Link to={'/neet/class-11-online-coaching'}>Class 11</Link>
      <Link to={'/neet/class-12-online-coaching'}>Class 12</Link> 
      <button onClick={redirecttohome}>go to home</button>
<div>
  <Outlet/>
</div>
   Footer


</div>

  )

 

}


function Class11(){

    const nav = useNavigate()

function redirectuserto12(){
  nav('/neet/class-12-online-coaching')
} 


  return (
 <div>
 
 hi there
  <button onClick={redirectuserto12}>go to class-12</button>   

 </div>

  )


}


function Class12(){




const nav = useNavigate()

function redirectuserto11(){
  nav('/neet/class-11-online-coaching')
}

  return (
 <div>
  hello there
  <button onClick={redirectuserto11}>go to class-11</button>
 </div>

  )


}



export default App
