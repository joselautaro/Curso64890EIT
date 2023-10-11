//Ejemplo N°1
import React from 'react'

export const ClaseDos = ({numero, persona, mostrar, items, fechaNacimiento}) => {
  return (
    <>
    <div>ClaseDos</div>
    {/* //Todo esto va en el componente padre
    
    //Ejemplo 2
  // const mensaje = "Hola desde el padre"

  //Ejemplo 3
  // const numero = 5;

  //Ejemplo4
  // const persona = {
  //   nombre: "Lautaro",
  //   edad: 30,
  //   padre: "En camino"
  // }

  //Ejemplo5
  // const mostrar = true;

  //Ejemplo 6
  // const listaDeItems = ["Manzana", "Banana", "Naranja"];

  //Ejemplo 7

  const fechaNacimiento = new Date(); */}


    {/* <h1> {props.mensaje} </h1>
    <h2>{props.saludo}</h2> */}
    {/* <h3>{numero}</h3> */}
    {/* <p>{persona.nombre}</p>
    <p>{persona.edad}</p>
    <p>{persona.padre}</p> */}
    {/* <p>{console.log(mostrar)}</p> */}
    {/* {
        items.map((item, index) =>(
           <li key={index}>{item}</li> 
        ))
    } */}

    {/* ____________________________________________ */}
    {/* Todo esto va dentro del return del padre */}
    {/* <ClaseDos mensaje="Hola Mundo"/> */}
      {/* <ClaseDos saludo={mensaje}/> */}
      {/* <ClaseDos numero={numero}/> */}
      {/* <ClaseDos persona={persona}/> */}
      {/* <ClaseDos mostrar={mostrar}/> */}
      {/* <ClaseDos items={listaDeItems}/> */}
      {/* <ClaseDos fechaNacimiento={fechaNacimiento}/> */}
    <h1>{fechaNacimiento.toDateString()}</h1>


    </>
  )
}








// import React from 'react'

// const ClaseDos = () => {
//   return (
//     <div>ClaseDos</div>
//   )
// }

// export default ClaseDos