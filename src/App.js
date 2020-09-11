import React from 'react';
import logo from './logo.svg';

//Componentes
import Prueba_1 from  './components/Prueba_useState/Prueba_1';
import Prueba_2 from  './components/Prueba_useState/Prueba_2';
import Prueba_3 from  './components/Prueba_useState/Prueba_3';
import Prueba_3_mejorado from  './components/Prueba_useState/Prueba_3_mejorado';



import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Prueba_1 /> */}
      {/* <Prueba_2 /> */}
      <Prueba_3_mejorado />

    </div>
  );
}

export default App;
