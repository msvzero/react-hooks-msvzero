import React, { useState, useEffect } from 'react';

const Prueba_1 = (props) => {
    const [resourceType , setResourceType] = useState('posts');
    const [items, setItems] = useState([])


    //se ejecuta cada vez que se vuelve a renderizar el componente
    // useEffect(() => {
    //     console.log('Render')
    // })

    //A diferencia del anterior, se ejecuta solo una vez cuando el componente se monta
    // useEffect(() => {
    //     console.log('onMount')
    // }, [])


    //A diferencia del anterior, se ejecuta una vez al montar el componente y luego se ejecuta cada vez que se actualiza 'resourceType'
    // useEffect(() => {
    //     console.log('Render')
    // }, [resourceType])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        // .then(json => console.log('Datos:', json))
        .then(json => setItems(json))
        return () => { // se ejecuta siempre al llamar useEffect. Aqui se desuscribe de cualquier listener
            console.log('Return from resource change')
        }
    }, [resourceType])



    return (
      <>
        <div>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        {items.map(item => {
            return <pre key={item.id}>{JSON.stringify(item)}</pre>
        })}
      </>
    );
}

export default Prueba_1;