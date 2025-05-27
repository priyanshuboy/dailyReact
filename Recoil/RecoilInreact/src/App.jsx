


// const Countcontext = createContext(); // in context api  everything re render after count changes
// const setcontext = createContext();

// function CountcontextProvider({ children }) {
//   const [count, setCount] = useState(0);

//   return (
//     <Countcontext.Provider value={count}>
//       <setcontext.Provider value={setCount}>
//       {children}
//       </setcontext.Provider>
//     </Countcontext.Provider>
//   );
// }


// App.jsx
import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { CounterAtom } from './store/atom/counter';

function App() {
  return (
    <div>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </div>
  );
}

function Counter() {
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

function CurrentCount() {
  const count = useRecoilValue(CounterAtom);
  return <div>Count: {count}</div>;
}

function Increase() {
  const [, setCount] = useRecoilState(CounterAtom);
  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      Increase
    </button>
  );
}

function Decrease() {
  const [, setCount] = useRecoilState(CounterAtom);
  return (
    <button onClick={() => setCount(prev => prev - 1)}>
      Decrease
    </button>
  );
}

export default App;


