import React, { useEffect, useState } from 'react';

export const DolarApi = () =>{

    const [dolarOficial, setDolarOficial] = useState(null);

    const data = [
        {
            "moneda": "USD",
            "casa": "oficial",
            "nombre": "Oficial",
            "compra": 347.5,
            "venta": 365.5,
            "fechaActualizacion": "2023-11-13T13:56:00.000Z"
          }
    ]

    //Filtrar el json para obtener el dato del valor oficial

    const dolarOficialData = data.find(item => item.casa === "oficial");

    useEffect(() =>{
        setDolarOficial(dolarOficialData)
    }, [dolarOficialData])

    return(
        <div>
            <h1>Valor dolar oficial</h1>
                {
                    dolarOficial ? (
                        <div>
                            <p>Compra: {dolarOficial.compra}</p>
                            <p>Venta: {dolarOficial.venta}</p>
                            <p>Fecha de actualización: {dolarOficial.fechaActualizacion}</p>
                        </div>
                    ):(
                        <p>Cargando...</p>
                    )
                }
        </div>
    )
}