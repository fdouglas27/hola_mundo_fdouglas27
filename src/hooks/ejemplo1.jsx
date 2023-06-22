/*
Ejemplo de uso del Hook useState

crear un componente de tipo funcion y acceder a su estado privado a traves de un hook y ademas poder modificarlo
*/

import React, { useState } from 'react';

const Ejemplo1 = () => {

    //Valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        name: 'Federico',
        email: 'fede@douglas.com',
    }

    /*
    Queremos que el VALORINICIAL y PERSONAINICIAL sean parte del estado del componente para asi poder gestionar su cambio y que este se vea reflejado en la vista del componente

    const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
    */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setpersona] = useState(personaInicial);


    /*
    Funcion para actualizar el estado privado que contiene el contador 
    */
    function incrementarContador() {
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /*
    Funcion para actualizar el estado de persona en el componente
    */
    function actualizarPersona() {
        setpersona({
            name: 'Juan',
            email: 'pepe@pepe.com',
        })
    }

    return (
        <div>
            <h1>Example of useState()</h1>
            <h2>CONTADOR: { contador }</h2>
            <h3>NOMBRE: { persona.name }</h3>
            <h4>EMAIL: { persona.email }</h4>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={ incrementarContador }> Increase Counter</button>
            <button onClick={ actualizarPersona }> Increase Counter</button>
        </div>
    );
}

export default Ejemplo1;


