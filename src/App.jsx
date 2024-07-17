import React, {useState} from 'react'

export default function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () =>{
    setCount(count + 1);
  }
  const handleDecrement = () =>{
    setCount(count - 1);
  }
  const handleReset = () =>{
    setCount(0);
  }

  return (
    <div>
      <h1>Counter App</h1>
      <div className="container">
        <h2>Count: {count}</h2>
        <button onClick={handleIncrement}}>+</button>
        <button onClick={handleDecrement}}>-</button>
        <button onClick={handleReset}>0</button>
      </div>
    </div>
  )
}
