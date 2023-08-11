import React from 'react';
import { useParams } from 'react-router-dom';

const TasksDetailsPage = () => {

    const {id} = useParams();

    return (
        <div>
            <h1>Task Details - {id}</h1>
        </div>
    );
}

export default TasksDetailsPage;
