/*
* Ejemplo de uso del metodo  component WillUnmount para el componente clase y ejemplo de uso de hooks para componente funcional
* (Cuando el componente va a desaparecer)
*/

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {
    
    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca')
    }
    
    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        // aqui no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        };
        
    }, []/*cuando los corchetes estan vacios indica que se ejecuta una sola vez */);

}




