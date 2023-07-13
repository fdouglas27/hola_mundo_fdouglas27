import React, { useState } from 'react';

let red = 0;
let green = 200;
let blue = 130;

// Esto viene desde greetingStyled.jsx
// ? estilo para usuario logueado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
}
// ? estilo para usuario no logueado
const unLoggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

// Login Loguot buttons (components)
const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={loginAction}> Login </button>
    )
}
const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={logoutAction}> Logout </button>
    )
}

const OptionalRender = () => {

    const [access, setAccess] = useState(false);

    // ? {Expresion true} && expresion => se renderiza la expresion
    // ? {Expresion false} && expresion => NO se renderiza la expresion
    const [nMessages, setNMessages] = useState(0);

    // const updateAccess = () => {
    //     setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true);
    }
    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;

    // access ? optionalButton = <button onClick={ updateAccess }> Logout </button> : optionalButton = <button onClick={ updateAccess }> Login </button>

    access ? optionalButton = <LogoutButton propStyle={unLoggedStyle} logoutAction={logoutAction}></LogoutButton> : optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>

    // Add messages
    let addMessages = () => {
        setNMessages(nMessages + 1)
    }



    return (
        <div>
            {/* Optional Button */}
            { optionalButton }
            {/* N Messages unread */}
            {/* With "&&" operator it will renderize if it´s true else nothing  */}
            {/* { nMessages === 1 && <p>You have 1 new message...</p>}
{ nMessages > 1 && <p>You have {nMessages} new messages...</p>}
{ nMessages === 0 && <p>There are no new messages </p>} */}

            {/* Ternal operator */}
            {/* {nMessages > 0 ? <p>You have {nMessages} new message{nMessages > 1 ? 's' : null}...</p> : <p>There are no new messages </p>}

            <button onClick={addMessages} className='btn btn-primary'>{nMessages === 0 ? 'First message' : 'New Message'}</button> */}

            {/* Change: if your are login it will show you everything if not just the login button */}

            { access ? ( <div> {nMessages > 0 ? <p>You have {nMessages} new message{nMessages > 1 ? 's' : null}...</p> : <p>There are no new messages </p>}

<button onClick={ addMessages } className='btn btn-primary'>{ nMessages === 0 ? 'First message' : 'New Message' }</button> </div> ) : null }


        </div>
    );
}

export default OptionalRender;
