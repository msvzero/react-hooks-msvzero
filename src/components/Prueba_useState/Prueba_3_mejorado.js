import React, { useState } from 'react';

function countInitial() {
    console.log('run function');
    return 4;
}

function themeInitial() {
  return 'blue'
}
const Prueba_3_mejorado = (props) => {
    const [count , setCount] = useState(() => countInitial());
    const [ theme, setTheme] = useState(() => themeInitial());



    const decrementCount = () => {
      setCount((prevCount) => prevCount - 1);
    }
  
    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
      changeTheme();
    }

    const changeTheme = () => {
      setTheme('red')
    }
    return (
      <>
        <button onClick={decrementCount}>-</button>
          <span>{count}</span> {' '}
          <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
      </>
    );
}

export default Prueba_3_mejorado;