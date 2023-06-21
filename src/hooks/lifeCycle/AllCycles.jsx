import React, { useEffect } from 'react';

const AllCycles = () => {

useEffect(() => {
    console.log('Componente Actualizado')

    const intervalID = setInterval(() => {
        console.log('Actualizacion del componente')
    }, 1000);

    return () => {
        console.log('Componente va a desaparecer');
        clearInterval(intervalID);
    };
}, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
