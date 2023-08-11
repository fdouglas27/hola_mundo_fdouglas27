import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProfilePage = ({ user }) => {

    const history = useNavigate();

    const goBack = () => {
        history(-1);
    }

    const goTasks = (path) => {
        history(path);
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={ goBack }>Go Back</button>
            <button onClick={ () => goTasks('/tasks') }>Tasks</button>
        </div>
    );
}

export default ProfilePage;
