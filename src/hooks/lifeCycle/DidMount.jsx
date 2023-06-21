/*
* Ejemplo de uso del metodo de ciclo de vida en componente clase y el jook de ciclo de vida en componente funcional
*/

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
    }

    render() {
        return (
            <div>
                <h1>Didmount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')

    }, []/*cuando los corchetes estan vacios indica que se ejecuta una sola vez */);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

export default DidMount;

