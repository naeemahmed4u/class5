import React, { useState } from 'react';
import './App.css';
import CounterContext from './counterContext';
import Parent from './Parent';


function App() {
  let countState = useState(1) //[count, setCount]
  //let [count, setCount] = useState(30)

  return (
    <CounterContext.Provider value = {countState}>
    <div> 
      <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
