import React from 'react';
import { useLocation } from 'react-router-dom';

const StatePage = () => {

    const location = useLocation();


    console.log(location.pathname) //State sent
    console.log(location.state?.online) //State sent
    console.log(location.search) //Query Params Sent

    return (
        <div>
            {/* <h1> State: { location.state.online }</h1> */}
        </div>
    );
}

export default StatePage;
