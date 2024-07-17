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
      <div className="container">
        <h2>Count: {count}</h2>
        <div>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement} hidden={count<=0 ? true : false}>-</button>
          <br/>
          <button onClick={handleReset}>Reset</button></div>
      </div>
    </div>
  )
}
