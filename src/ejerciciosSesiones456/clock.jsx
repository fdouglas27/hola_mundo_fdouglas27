import React, { useState, useEffect } from 'react'

export const ClockFuntional = () => {

    const data = {
        nombre: 'Federico',
        apellidos: 'Douglas Price'
    };

    const [edad, setEdad] = useState(0);
    let [fecha, setFecha] = useState(new Date());
   
    useEffect(() => {
        console.log('Componente Actualizado')
    
        const intervalID = setInterval(() => {
            setEdad(edad + 1)
            setFecha(fecha = new Date())
        }, 1000);
    

        return () => {
            clearInterval(intervalID);
        };
    });

    return (
        <div>
            <h2>
         Hora Actual: {fecha.toLocaleString()}
         </h2>
         <h3>{data.nombre} {data.apellidos}</h3>
         <h1>Edad: {edad}</h1>
        </div>
    );
}
