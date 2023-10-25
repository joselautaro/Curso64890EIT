import React, { useState } from 'react'
import './style.css'

export const Clase3 = () => {

    

    //Ejemplo 10

    

    return (

        <div>
            <h4>Clase 3</h4>
        </div>
    )
}


//Ejemplo1 - Evento de click
    // const handle =() =>{
    //     alert("Click realizado")
    // }
    //

    //Ejemplo2 - Evento de cambio de input
    // const [input, setInput] = useState('')
    // const handleChange = ( event ) =>{
    //     setInput(console.log(event.target.value))
    // }

    //Ejemplo3 - Manejo de evento del formulario
    // const [formValue, setFormValue] = useState('');


    //funcion para "Envio de formulario"
    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     alert('Formulario enviado con el valor: ' + formValue);
    // }

    // //Función de cambio de estado de input
    // const handleInputChange = (e) =>{
    //     setFormValue(e.target.value)
    // }

    //Ejemplo 4 - Manejo de evento con enfoque y desenfoque

    // const [focus, setFocus] = useState(false)

    // const handleFocus = () =>{
    //     setFocus(true)
    // }

    // const handleBlur = () =>{
    //     setFocus(false)
    // }

    //Ejemplo5 - Manejo de evento de teclado

    // const [keyPress, setKeyPress] = useState('');

    // const handleKey = (e) =>{
    //     setKeyPress(e.key)
    // }

    //Ejemplo 6 - Manejo de evento de arrastre

    // const [arrastre, setArrastre] = useState(false);

    // const handleDragComienza = () => {
    //     setArrastre(true)
    // }

    // const handleDragFinaliza = () => {
    //     setArrastre(false)
    // }

    //Ejemplo 7 - Manejo de evento de tiempo

    // const [timer, setTimer] = useState(0);

    // const [estaCorriendo, setEstaCorriendo] = useState(false)

    // const comenzarTimer = () =>{
    //     setEstaCorriendo(true)
    //     setTimeout(() =>{
    //         setTimer(timer + 1)
    //         setEstaCorriendo(false)
    //     }, 5000)
    // }

    //Ejemplo 8 - Manejo de evento de cambio de ventaja 

    // const handleResize = () =>{
    //     alert('La ventana ha sido redimensionada')
    // }

    // window.addEventListener('resize', handleResize)

{/* <p>Escucha el evento de redimensionado de la ventana del navegador</p> */ }
{/* <button onClick={comenzarTimer} disabled={estaCorriendo}>
    {estaCorriendo ? 'Temporizador en ejecución' : 'Iniciar temporizador'}
</button>
<p>Tiempo transcurrido: {timer} segundos</p> */}

// <div
// draggable
// onDragStart={handleDragComienza}
// onDragEnd={handleDragFinaliza}
// style={{
//     padding: '20px',
//     backgroundColor: arrastre ? 'lightblue' : 'lightgrey',
//     border: '1px solid gray',
// }}
// >
//     {arrastre ? 'Soltar aqui' : 'Arrastra aquí'}
// </div>
















{/* <button onClick={handle}>Haz click</button> */ }
{/* <input type="text" value={input} onChange={handleChange}/> */ }
{/* <form onSubmit={handleSubmit}>
    <input type="text" value={formValue} onChange={handleInputChange}/>
    <button type='submit'>Enviar</button>
</form> */}
{/* <input 
type="text" 
onFocus={handleFocus}
onBlur={handleBlur}
placeholder={focus ? 'Hizo click' : 'No hizo click'}
/> */}
{/* <input 
type="text" 
onKeyDown={handleKey}
placeholder={`Última tecla presionada: ${keyPress}`}
/> */}