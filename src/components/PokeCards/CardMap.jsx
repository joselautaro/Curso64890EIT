// import React, {useEffect, useState} from "react";
// import { PokeCards } from "./PokeCard";

// export const CardMap = () =>{

//     const [pokemonList, setPokemonList] = useState([])

//     useEffect(() =>{
//         const fetchData = async () =>{
//             try{
//                 const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=4');
//                 if( !response.ok){
//                     throw new Error('Falla en la llamada a la api')
//                 }
//                 const data = await response.json();
//                 setPokemonList(data.results);
//             }catch(error){
//                 console.log("Error: ", error)
//             }
//         }
//         fetchData();
//     }, [])

//     return(
//         <div>
//             <h1>Informacion de pokemones</h1>
//             <div className="pokemon-card-container">
//                 {
//                     pokemonList.map((pokemon, index) =>(
//                         <PokeCards key={index} pokemonUrl={pokemon.url}/>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// import React, { useEffect, useState } from "react";
    
// import { PokeCards } from "./PokeCard";

// export const CardMap = () => {
//   const [pokemonList, setPokemonList] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=4");
//         if (!response.ok) {
//           throw new Error("Falla en la llamada a la api");
//         }
//         const data = await response.json();
//         setPokemonList(data.results);
//       } catch (error) {
//         console.log("Error: ", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Informacion de pokemones</h1>
//       <div className="pokemon-card-container">
//         {pokemonList.map((pokemon, index) => (
//           <PokeCards key={index} pokemonUrl={pokemon.url} />
//         ))}
//       </div>
//     </div>
//   );
// };
