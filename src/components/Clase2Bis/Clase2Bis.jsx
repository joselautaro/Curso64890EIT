import React, {useState} from 'react'
import './style.css';

export const Clase2Bis = () => {

    const [contador, setContador] = useState(0)

    const aumentar = () =>{
        setContador(contador + 1);
    }

    const disminuir = () =>{
        if(contador > 0){
            setContador(contador - 1)
        }
    }

  return (
    <>
        <p>{contador}</p>
        <button className='button' onClick={aumentar}>➕</button>
        <button className='button' onClick={disminuir}>➖</button>
    </>

)
}

{/* <p>{console.log(primerNumero)}</p>
<p>{console.log(...resto)}</p>
<p>{console.log(colorAzul)}</p> */}
// //Desestructuramos arrays

    // // const array = ["Uno", "Dos", "tres"];
    
    // // const [Uno, Dos, Tres] = array;

    // const numeros = [1, 2, 3, 4, 5];

    // const [primerNumero, segundoNumero, ...resto] = numeros;

    // //Ignorar valores

    // const colores = ['rojo', 'verde', 'azul'];

    // const [ , , colorAzul ] = colores;