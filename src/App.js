
import './App.css';
import freecodecamplogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {
/* useState es un hook -es una funcion - que 
le agrega un estado a un componente funcional : useState actualiza el estado de 
un componente*/

  const [ numClics, setNumClics] = useState (0);

  const  manejarClick = () => {
    setNumClics (  numClics + 1 );
  };

  const reiniciarContador = () => {
    setNumClics(0);

  };

  return (
    <div className="App">
      <div className ='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freecodecamplogo}
        alt= 'logo freecodecamp'/>
      </div>


    <div className='contenedor-principal'>
      <Contador numClics = { numClics} />

      <Boton
        texto= 'Click'
        esBotonDeClick={true}
        manejarClick={manejarClick}/>

      <Boton
        texto='Reiniciar'
        esBotonDeClick= {false}
        manejarClick = {reiniciarContador}/>
    </div>
    </div>
  );
}

export default App;
