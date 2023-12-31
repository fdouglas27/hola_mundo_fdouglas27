import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import StatePage from './StatePage';

const HomePage = () => {

    const location = useLocation();
    const history = useNavigate();

    console.log('We are in Route: ', location.pathname );

    const goBack = () => {
        history(-1)
    }
    const goFoward = () => {
        history(1)
    }

    const goNewPath = (path) => {
        history(path)
    }

    const navigateProps = (path) => {
        history(path, {search: '?online=true'}, {state: {online: 'true'}})
    }

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Dashboard</h2>

            <button onClick={() => navigateProps('/online-state')}>State</button>
            <button onClick={() => history('/profile')}>Go To Profile</button>
             <button onClick={goBack}>Back</button>
             <button onClick={goFoward}>Foward</button>
             {/* <button onClick={goNewPath}>New Path</button> */}
        </div>
    );
}

export default HomePage;
