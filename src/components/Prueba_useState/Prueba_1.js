import React, { useState } from 'react';

const Prueba_1 = (props) => {
    const [count , setCount] = useState(4)

    const decrementCount = () => {
      setCount((prevCount) => prevCount - 1);
    }
  
    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
    }
    return (
      <>
        <button onClick={decrementCount}>-</button>
          <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </>
    );
}

export default Prueba_1;