import React, { useState, useReducer } from 'react';

export const ACTION_ADD_TODO = 'ACTION_ADD_TODO';
export const ACTION_TOGGLE_TODO = 'ACTION_TOGGLE_TODO';
export const ACTION_DELETE_TODO = 'ACTION_DELETE_TODO';




function reducer(state, action) {
  switch(action.type) {
    case ACTION_ADD_TODO: 
      return [...state, newTodo(action.payload.name)]
    case ACTION_TOGGLE_TODO:
        return state.map((todo) => {
            if(todo.id === action.payload.id){
                return {...todo, complete: !todo.complete}
            }
            return todo
        });
    case ACTION_DELETE_TODO:
        return state.filter((todo) => {
            return todo.id !== action.payload.id
        });

    default:
      return state;
  }
  
}
function newTodo(name) {
    console.log('name: ', name)
    return {id: Date.now(), name: name, complete: false}
}

const Prueba_1 = (props) => {
    const [todos, dispatch] = useReducer(reducer, []); 
    const [name, setName] = useState('')
    

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: ACTION_ADD_TODO, payload: {name:name} })
        setName('') 
    }

    console.log(todos)
    return (
      <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" value={name} onChange={e => setName(e.target.value) }/>
        </form>
        {
            todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })
        }

      </>
    );
}

const Todo = ({todo, dispatch}) => {
    return (
        <div>
            <span style={{color: todo.complete ? '#AAA' : '#000'}}>{todo.name}</span> {' '}
            <button onClick={() => dispatch({type: ACTION_TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>{' '}
            <button onClick={() => dispatch({type: ACTION_DELETE_TODO, payload: {id: todo.id}})}>Delete</button>{' '}
        </div>
        
    )

}

export default Prueba_1;