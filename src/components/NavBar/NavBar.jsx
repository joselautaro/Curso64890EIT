import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

export const NavBar = () => {
    return (
        <div className='nav'>
            <Link className='link' to="/">Inicio</Link>
            <Link className='link' to="/dos">Dos</Link>
            <Link className='link' to="/dos-bis">Dos Bis</Link>
            <Link className='link' to="/tres">Tres</Link>
            <Link className='link' to="/cuatro">Cuatro</Link>
            <Link className='link' to="/poke">Poke Cards</Link>
        </div>
    )
}
{/* <a href="/">Inicio</a>
<a href="/dos">Clase 2</a>
<a href="/dos-bis">Bis</a>
<a href="/tres">Tres</a>
<a href="/cuatro">Cuatro</a> */}