import React, { useState } from 'react';

//Definiendo estilos en constantes

// ? estilo para usuario logueado
const loggedStyle = {
    color: 'white',
}
// ? estilo para usuario no logueado
const unLoggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    // Generamos un estado para el componente y asi controlar si el usuario esta o no logueado
    const [logged, setLogged] = useState(false);

    const greetingUser = () => (<p>Hola, { props.name }</p>);
    const pleaseLogin = () => (<p> Pleace login </p>);

    return (
        <div style={ logged ? loggedStyle : unLoggedStyle }>

        { logged ?   
            greetingUser() :  pleaseLogin()
        }
           
            <button onClick={ () => {
                console.log('boton pulsado')
                setLogged(!logged);
                // console.log(logged)
            } }>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
