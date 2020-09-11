import React, { useState } from 'react';

function countInitial() {
    console.log('run function');
    return { count: 4, theme: 'blue'};
}
const Prueba_3 = (props) => {
    const [state , setState] = useState(() => countInitial());
    const count = state.count;
    const theme = state.theme;


    const decrementCount = () => {
    //   setCount((prevCount) => prevCount - 1);
        setState(prevState => {
            return {...prevState, count: prevState.count - 1 }
        })
    }
  
    const incrementCount = () => {
    //   setCount((prevCount) => prevCount + 1);
        setState(prevState => {
            return {...prevState, count: prevState.count + 1 }
        })
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

export default Prueba_3;