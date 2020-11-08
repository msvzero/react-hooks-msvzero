import React, { useState, useReducer } from 'react';

const ACTION_INCREMENT = 'ACTION_INCREMENT';
const ACTION_DECREMENT = 'ACTION_DECREMENT';



function reducer(state, action) {
  switch(action.type) {
    case ACTION_INCREMENT: 
      return {count: state.count + 1}
    case ACTION_DECREMENT:
      return {count: state.count - 1}
    default:
      return state;
  }
  
}

const Prueba_1 = (props) => {
    const [state, dispatch] = useReducer(reducer, {count:0}); 
    

    const decrementCount = () => {
      dispatch({type: ACTION_DECREMENT})
    }
  
    const incrementCount = () => { 
      dispatch({type: ACTION_INCREMENT})
    }
    return (
      <>
        <button onClick={decrementCount}>-</button>
          <span>{state.count}</span>
        <button onClick={incrementCount}>+</button>
      </>
    );
}

export default Prueba_1;