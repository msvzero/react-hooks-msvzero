
// useRef permite obtener el valor previo cuando utilizamos useState, el ejemplo el name
import React, {useState, useRef, useEffect} from 'react';



const Prueba_2 = (props) => {
    const [name, setName ] = useState('');
    const prevName = useRef('');

    useEffect(() => {
        prevName.current = name
    }, [name])

   


    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <p>My name is: {name} and it used to be {prevName.current}</p>
          
        </div>
    )

}

export default Prueba_2;