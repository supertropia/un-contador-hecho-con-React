import React from 'react';
import contador from '../hojas-de-estilo/Contador.css';

 //sintaxis de desestructuracion
function Contador ({ numClics } ){ 
  return (
    <div className ='contador'>
      { numClics }

    </div>


  );
}

export default Contador;