import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

    const history = useNavigate();

    const navigateTo = (path) => { 
        history(path);
    }
    const goBack = () => {
        history(-1)
    }
    const goFoward = () => {
        history(1)
    }

    return (
        <div>
            <h1>404 - Page not found</h1>
            <button onClick={ () => navigateTo('/') }> Go back to home </button>
            <button onClick={ goBack }> Go Back </button>
            <button onClick={ goFoward }> Go Forward </button>
        </div>
    );
}

export default NotFoundPage;
