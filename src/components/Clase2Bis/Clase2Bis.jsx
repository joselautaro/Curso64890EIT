import React, {useState} from 'react'

export const Clase2Bis = () => {

    // const [ string, setString ] = useState("Hola Soy un estado!");
    
    const [contador, setContador] = useState(0)

    const aumentar = () =>{
        setContador(contador + 1);
    }

    const disminuir = () =>{
        setContador(contador - 1);
    }

  return (
    <>
    <div>Clase2Bis</div>
    {/* <p> { string }</p> */}
    <p>Contador: {contador}</p>
    {/* <button onClick={() => setContador(contador + 1)}>Aumentar</button> */}
    <button onClick={aumentar}>Aumentar</button>
    <button onClick={disminuir}>Disminuir</button>
    <hr />

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