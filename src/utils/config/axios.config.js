import axios from "axios";

// Default config for Axios
export default axios.create({
    baseURL: 'https://randomuser.me/api',
    responseType: 'json',
    // headers: 'Access-Control-Allow-Origin: *',
    // auth: 
    // Si la peticion demora mas de 6 segundos falla
    timeout: 6000,
    // method: 'post'
}
)