/*
* Ejemplo de us de metodo componente de Clase y uso de hook en componente funcion
*/

import React, { Component, useEffect } from 'react';

class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambios en su estado')
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambios en su estado')
    });

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}

