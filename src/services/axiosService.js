import axiosConfig from "../utils/config/axios.config";

export default function getRandomUser() {
    // Es la respuesta que viene de  "http://randomuser.me/api/"
    // Toma la configuracion que hicimos en axios.config.js y le suma una "/" al final
    return axiosConfig.get('/',  {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        }
    }
    )
    .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
    // axiosConfig.post('/login', body)
}

