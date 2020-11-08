import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';

export default function Prueba_1() {
    const [ name, setName ] = useLocalStorage('name', ' ');
    useUpdateLogger(name)
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}
