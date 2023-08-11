import React, { useState, useEffect } from 'react';
import { loginCrud } from '../../services/axiosCRUDService';

const AxiosCrudExample = () => {

    const authUser = () => {
        loginCrud('eve.holt@reqres.in', 'cityslicka')
        //Aca consumo la respuesta de "axiosCrudService"
            .then((response) => {
                alert(JSON.stringify(response.data))
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => alert('Finally executed'))
    }

    return (
        <div>
            <button onClick={ authUser }>Login</button>
        </div>
    );
}

export default AxiosCrudExample;
