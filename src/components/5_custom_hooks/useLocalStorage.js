import React, { useState, useEffect} from 'react';

//Para obtener el dato
function getSavedValue(key, initialValue){
    const savedValue = JSON.parse(localStorage.getItem(key))// para obtener el valor almacenado en el localstorage
    if(savedValue) return savedValue;
    if(initialValue instanceof Function) return initialValue();
    return initialValue;

}

export default function useLocalStorage(key, initialValue) {
    const [ value, setValue ] = useState(() => { // le pasamos como parametro a useState una funcion, esto para que se ejecute solo en el primer render, y no cada vez que se renderiza la pagina
        return getSavedValue(key, initialValue);
    });

    //Para guardar nuestro valor en el localstorage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[value])
    return [ value, setValue];
}
