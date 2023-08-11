import React, { useState, useEffect } from 'react';
import getRandomUser from '../../services/axiosService';

const AxiosExample = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        obtainUser();

    }, []);

    const obtainUser = () => {
        getRandomUser()
            .then((response) => {
                if (response.status === 200) {
                    console.log(response)
                    //En el console.log anterior se puede ver que viene mucha informacion. Viene un {Data} que dentro tiene la informacion devuelta, (config, data, headers, request). Dentro del segundo "data" tenemos "results" es muy importante poner los corchetes!!
                    setUser(response.data.results[0])
                    // setUser(response.data)
                }
            })
            .catch((error) => alert(`Something went wrong retrieving this user: ${error} `))
    }

    return (
        <div>
            <h1>Axios Example</h1>
            {user != null ?
                (<div>
                    <img alt='avatar' src={user.picture.large} />
                    <h2> {user.name.title} {user.name.first} {user.name.last} </h2>
                    <h3> { user.email } </h3>

                    <p>Generate a new user</p>
                    <button onClick={ obtainUser }>
                        Random User
                    </button>
                </div>
                )
                :
                (
                    <div>
                        
                    <p>Generate a new user</p>
                    <button onClick={ obtainUser }>
                        Random User
                    </button>
                    </div>
                )
            }
        </div>
    );
}

export default AxiosExample;
