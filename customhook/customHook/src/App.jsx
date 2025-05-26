// App.js
import { useState } from 'react';
import './App.css';
import {useFetch , usePostTitle } from './hooks/useFatch';

// custom hook
function useCounter() {
  const [count, setCount] = useState(0);

  function counter() {
    setCount(prev => prev + 1);
  }

  return {
    count,
    counter
  };
}

function App() {
  const { count, counter } = useCounter();
  const post = usePostTitle();
 
  const {finaldata} = useFetch("https://jsonplaceholder.typicode.com/posts")

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Random Post Title:</h2>
      <p>{post || 'Loading...'}</p>
    {JSON.stringify(finaldata.title)}
      <button onClick={counter}>
        Increase count: {count}
      </button>
    </div>
  );
}

export default App;





// useEffect(()=>{
   
//   const interval = setInterval(() => {
//     setCount(prev => prev +1)
//   },1000)
   
//  return () => clearInterval(interval);
// },[])