import React, { useEffect, useState } from "react";
import './style.css';

export const Clase4 = () => {

    const [pokemon, setPokemon] = useState(null);

    const [id, setId] = useState(1);

    const [busqueda, setBusqueda] = useState("");


    useEffect(() => {
        setPokemon(null)
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPokemon({
                    numero: data.id,
                    nombre: data.name,
                    img: data.sprites.front_default
                })
            })
    }, [id])


    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }

    const handleSiguiente = () => {
        setId(id + 1)
    }

    const handleInputChange = (e) =>{
        setBusqueda(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(busqueda.length > 1){
            setPokemon(null)
            fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
                .then((res) => res.json())
                .then((data) =>{
                    setPokemon({
                        nombre: data.nombre,
                        img: data.sprites.front_default
                    })
                    setId(
                        data.id
                    )
                })
        }



    }

    return (
        <>
            <div className="card">
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" 
                        value={busqueda}
                        autoFocus
                        onChange={handleInputChange}
                        />
                    </form>
                </div>
                <div>
                    {
                        !pokemon ? <h5>Cargando...</h5> :
                            <>
                                <span>{pokemon.numero}</span>
                                <h4>{pokemon.nombre}</h4>
                                <img src={pokemon.img} alt={pokemon.img} />
                            </>
                    }
                </div>
            </div>
            <button onClick={handleAnterior}>◀</button>
            <button onClick={handleSiguiente}>▶</button>
        </>
    )
}