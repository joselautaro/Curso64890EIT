import React, { useEffect, useState } from "react";
import { pedirProductos } from '../../helpers/pedirProductos';
import {Clase2Bis} from '../Clase2Bis/Clase2Bis';
import { DolarApi } from "../DolarApi/DolarApi";
import './style.css'

export const Clase5 = () => {

    const [loading, setLoading] = useState(false);

    const [items, setItems] = useState([]);


    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((res) => {
                setItems(res)
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Ups...',
                    text: 'No se pudieron cargar los productos!',
                })
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])




    return (
        <>
            {
                loading
                    ? <div>Cargando...</div>
                    : (
                        <div className="card-padre">
                            {items.map((item) => (
                                <div className="card">
                                    <div key={item.id}>
                                        <img src={item.photo} alt={item.photo} />
                                        <p>{item.name}</p>
                                        <h4>{item.description}</h4>
                                        <h5>{item.category}</h5>
                                        <h5>${item.price}</h5>
                                        <Clase2Bis/>
                                    </div>
                                </div>
                            ))}
                            <DolarApi/>
                        </div>
                    )
            }
        </>
    )
}