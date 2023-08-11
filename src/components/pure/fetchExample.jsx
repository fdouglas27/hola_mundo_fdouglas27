import React, { useEffect, useState } from 'react';
import { getAllUsers, getAllPagedUsers, getUserDetails, loginFetch } from '../../services/fetchService';


const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});

    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [pages, setPages] = useState(2);

    useEffect(() => {
        obtainUsers()
        return () => {

        };
        //Cuando estan los dos corchetes vacios indico que solo se ejecutara la primera vez
    }, []);

    const obtainUsers = () => {
        // "fetch" returns a promise
        getAllUsers()
            // "response" it´s a JSON file already
            .then((response) => {
                //Because I didn´t send from "fetchService" the response.json, and just sent the "response" now I must change a little the code here, I have to add ".json().then "
                console.log('All users: ', response.data);

                //"data", "total_pages" etc vienen de reqres.in, son los datos que leo con la API
                setUsers(response.data);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page)

                setPages(response.total_pages);

                //La mejor manera es que todo se haga desde el servicio "fetchService.js" y no sobre el componente, el componente debe quedar mas limpio, por lo tanto es mejor pasar el response como un json como lo que esta pintado arriba, OJO para poder hacerlo como abajo debo pasar desde fetchService.js "response" sin el ".json"!!
                //  console.log('All users ', response.json().data);
                // if(response.status === 200 && response.ok) {
                //     response.json()
                //         .then((body) => {
                //             console.log('All users ', body.data);
                //             setUsers(body.data);
                //         })
                //         .catch((error) => alert(`Something went wrong: ${error}`))
                // }


            })
            .catch((error) => alert(`Something went wrong while retrieving the users: ${error}`))
            .finally(() => {
                console.log('Ended obtaining users: ');
                console.table(users);
            })
    }

    const obtainPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                console.log('All Paged Users: ', response.data);

                setUsers(response.data);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page)

                setPages(response.total_pages);
            })
            .catch((error) => alert(`Something went wrong while retrieving the users: ${error}`))
            .finally(() => {
                console.log('Ended obtaining users: ');
                console.table(users);
            })
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log('User Details: ', response.data);
                setSelectedUser(response.data);
            })
            .catch((error) => alert(`Something went wrong while retrieving the user: ${error}`))
            .finally(() => {
                console.log('Ended obtaining user: ');
                console.table(selectedUser);
            })
    }

    const authUser = () => {
        //Email y pass son copiados de reqres para este ejemplo
        const email = "kminchelle";
        const password = "0lelplR";
        loginFetch(email, password)
            .then((response) => {
                console.log('Token: ', response.token);
                sessionStorage.setItem('token', response.token)
            })
            .catch((error) => alert(`Error while login user: ${error}`))
            .finally(() => {
                console.log('Ended login user');
            })

    }


    return (
        <div>
        {/* button to simulate a login button */}
        <button onClick={ authUser }>Auth User</button>
            <h2>Users:</h2>
            {/* ! it´s important to use "index" to avoid errors */}
            {users.map((user, index) => (
                <p key={index} onClick={() => obtainUserDetails(user.id)}>
                    {user.first_name} {user.last_name} {user.email} {index}
                </p>
            ))}
            <p>Showing {usersPerPage} users of {totalUsers} in total</p>

            <button onClick={() => obtainPagedUsers(1)}>1</button>
            <button onClick={() => obtainPagedUsers(2)}>2</button>
            <div>
                <h3>
                    User Details
                </h3>
                {
                    selectedUser && (
                        <div>
                            <p> {selectedUser.first_name} </p>
                            <p> {selectedUser.last_name} </p>
                            <p> {selectedUser.email} </p>
                            <img alt='Avatar' src={selectedUser.avatar} style={{ height: '50px', width: '50px' }} />

                        </div>
                    )
                }
            </div>

        </div>
    );
}

export default FetchExample;
