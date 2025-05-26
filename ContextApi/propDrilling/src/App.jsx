import React, { useContext, useState, createContext } from "react";

// Create context with correct casing
const BulbContext = createContext(); // context to avoid prop drilling

export function BulbProvider({ children }) {
  const [bulbOn, setBulb] = useState(true);

  return (
    <BulbContext.Provider value={{
      bulbOn,
      setBulb
    }}>
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  return (
    <div>
      <BulbProvider>
        <Lightbulb />
      </BulbProvider>
    </div>
  );
}

function Lightbulb() {
  return (
    <div>
      <BulbState />
      <ToggleBulbState />
    </div>
  );
}

function BulbState() {
  const { bulbOn } = useContext(BulbContext); // correct context and variable
  return (
    <div>
      {bulbOn ? "Bulb is ON" : "Bulb is OFF"}
    </div>
  );
}

function ToggleBulbState() {
  const { setBulb, bulbOn } = useContext(BulbContext);

  const change = () => {
    setBulb(!bulbOn);
  };

  return (
    <div>
      <button onClick={change}>Toggle Bulb</button>
    </div>
  );
}

export default App;
