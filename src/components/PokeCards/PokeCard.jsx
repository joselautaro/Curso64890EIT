import React, {useEffect, useState} from 'react';
import './PokeCard.css';

export const PokeCards = () =>{

    //Declaramos variable de estado con null
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() =>{
        //Efectuamos llamada a la api
        const fetchData = async() =>{
            //Manejamos solicitud y posibles errores con try-catch
            try{
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/35')
                if(!response.ok){
                    throw new Error('Falla en la llamada a la Poke Api');
                }
                const data = await response.json();
                setPokemonData(data);
            }catch(error){
                console.log('Error', error);
            }
        };
        fetchData();
    },[])


    
    return(
        <div className='pokemon-card'>
            {
                pokemonData ? (
                    <div className='card'>
                        <img src={pokemonData.sprites.front_default} alt={pokemonData.sprites.front_default} />
                        <h2>{pokemonData.name}</h2>
                        <p>Base experiencia: {pokemonData.base_experience}</p>
                        <p>Alto: {pokemonData.height}</p>
                        <p>Peso: {pokemonData.weight}</p>
                        <p>Tipo de pokemon: {pokemonData.types[0].type.name}</p>
                    </div>
                ):(
                    <p>Cargando...</p>
                )
            }
            
        </div>
    )
}