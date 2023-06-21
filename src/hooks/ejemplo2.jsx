/*
* ejemplo de uso de:
* - useState()
* - useRef()
* - useEffect()
*/

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    //Vamos a crear dos contadores distintos, cada uno en un esta diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Vamos a crear una referencia con useRef() para asociar una variable con un elemento del DOM del componente (vista HTML)

    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);

    }
    function incrementar2() {
        setContador2(contador2 + 1);
    }

    /*
    * Trabajando con useEffect()
    * ? Caso 1: Ejecutar SIEMPRE un snippet de codigo
    * Cada vez que haya un cambio en el estado del componente se ejecuta aquello que este dentro del useEffect()
    */

    // useEffect(() => {
    //    console.log('Cambio en el estado del componente');
    //    console.log('Mostrando referencia a elemento del DOM');
    //    console.log(miRef);
    // });

    /*
    * ? Caso 2: Ejecutar solo CUANDO cambie CONTADOR1
    * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
    * En caso de que cambie contador2, no habra ejecucion
    */

    // useEffect(() => {
    //     console.log('Cambio en el estado del Contador1');
    //     console.log('Mostrando referencia a elemento del DOM');
    //    console.log(miRef);
    // }, [contador1]);

    /*
* ? Caso 3: Ejecutar solo CUANDO cambie CONTADOR1 o Contador2
* Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
* En caso de que cambie contador2, no habra ejecucion
* La diferencia con el caso 1, es que si existiese un tercer elemento este no cambiaria nada, pero ahora es como si el 3 y el 1 son el mismo caso
*/

    // useEffect(() => {
    //     console.log('Cambio en el estado del Contador1 / Contador2');
    //     console.log('Mostrando referencia a elemento del DOM');
    //     console.log(miRef);
    // }, [contador1, contador2]);

    return (
        <div>
            <h1>Example of useState(), useReff() y useEffect</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador1</button>
                <button onClick={incrementar2}>Incrementar contador2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
