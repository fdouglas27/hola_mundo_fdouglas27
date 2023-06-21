import React, { useState, useEffect } from "react";

export const ComponenteEstado = () => {

    // const [puntos, setPuntos] = useState(0);
    const [partida, setPartida] = useState(0);

    useEffect(() => {
        console.log('Actualizacion de puntos')
    }, [partida]);

    const sumarPartida = () => {
        setPartida(partida + 1)
    }

    return (
        // <h1>
        //     Puntuacion: { puntos }
        // </h1>
        <div>
        {/* <h1>
            Hola, {partida.usuario}
        </h1> */}

        <h2>
            Puntuacion: { partida}
        </h2>
        <button onClick={ sumarPartida }> Sumar Puntos</button>

        </div>

    )
}