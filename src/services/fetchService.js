export const getAllUsers = async () => {

    let response = await fetch('https://reqres.in/api/users');
    //If a change return from "response.json()" to "response" I´ve to change the jsx file
    // return response
    console.log('Response: ', response)
    console.log('Status: ', response.status)
    console.log('Ok?: ', response.ok)
    // //Returns the json
    return response.json()

}

export const getAllPagedUsers = async (page) => {
    // Para hacer lo siguiente a la URL le debemos agregar un query parm "?page=${page}"
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log('Response: ', response)
    console.log('Status: ', response.status)
    console.log('Ok?: ', response.ok)

    return response.json()
}

export const getUserDetails = async (id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`);
    console.log('Response: ', response)
    console.log('Status: ', response.status)
    console.log('Ok?: ', response.ok)

    return response.json()

}

//? Distintos metodos de enviar y recibir datos HTTP:
// GET Obtener datos
//! Metodo POST crear datos
//UPDATE
//DELETE
//PUT
// PATCH
//Respuestas: 200(OK), 300/400 (sin permisos), 500 (error servidor)

//Aca utilizamos un metodo POST
export const loginFetch = async (username, password) => {

    // "body" es lo que vamos as enviar al servidor
    let body = {
        // email: email,
        // password: password
        //Como el nombre de la clave es igual al dato pasado no hay necesidad de escribir nuevamente luego de los dos puntos "email: email" es igual a poner:
        username,
        password
    }

    //Cuando pasamos "body" por defecto es "POST", es lo que viene luego de la URL
    // let response = await fetch('https://reqres.in/api/login', {
    //     //Esta parte se puede pasar a varios metodos (get, post, etc)
    //     method: 'POST',
    //     //"Mode", cors(diferentes entornos), 
    //     mode: "no-cors",
    //     //"credentials" se pide algun tipo de autenticacion? "omit" no las tiene en cuenta
    //     credentials: "omit",
    //     cache: 'no-cache',
    //     headers: {
    //         'Content-type': 'application/json'
    //     },
    //     //"body" es igual a poner "body: body", si no entendi mal, "body" es lo que diferencia al metodo "POST"
    //     body,

    // } );

    //! Aca use 'https://dummyjson.com/auth/login' porque https://reqres.in esta mal y no trae los datos correctos en /*login!
    let response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            username: 'kminchelle',
            password: '0lelplR',
            // expiresInMins: 60, // optional
        })
    })
        // .then(res => res.json())
        // .then(console.log);

    return response.json();

}

