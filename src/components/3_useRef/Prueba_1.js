
// useRef permite almacenar valores que persisten entre renders
import React, {useState, useRef, useEffect} from 'react';



const Prueba_1 = (props) => {
    const [name, setName ] = useState('');
    const renderCount =  useRef(1);
    const inputRef = useRef();

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    function focus() {
        inputRef.current.focus();
    }


    return (
        <div>
            <input  ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <p>My name is: {name}</p>
            <p>Render count: {renderCount.current}</p>
            <button onClick={focus}>Focus</button>
        </div>
    )

}

export default Prueba_1;