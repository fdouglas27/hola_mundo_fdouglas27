import axios from "axios";

/*
* Login Method to ReqRes endpoint
* @param { string } email
* @param { string } password
*/

export const loginCrud = (email, password) => {

    let body = {
        email,
        password
    }

    //Metodo para enviar datos: post()
    // Este return devuelve una promesa que tenemos que consumir con un ".then"
    return axios.post('https://reqres.in/api/login', body)
}