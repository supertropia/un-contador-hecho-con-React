import React from 'react';
import '../hojas-de-estilo/Boton.css';

//componente del boton
function Boton ( {texto, esBotonDeClick, manejarClick }){
  return(
    <button
      className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}//operador ternario - condicional de una linea 
      //event listener
      onClick={ manejarClick}>  
      { texto }
    </button>
    );

}

export default Boton;