import React, { useState } from 'react';

function countInitial() {
    console.log('run function');
    return 4;
}
const Prueba_2 = (props) => {
    const [count , setCount] = useState(() => countInitial())

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

export default Prueba_2;