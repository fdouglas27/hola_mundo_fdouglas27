import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

//importamos la hoja de estilos de task.scss
import '../../styles/task.scss'

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    //Estado del componente 
    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);
    
    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');

        setLoading(false);

        return () => {
            console.log('TaskList component is going to UNmount...');
        };
    }, [tasks]);

    // const changeState = (id) => {
    //     console.log('ToDo: Cambiar estado de una tarea')
    // }

    return (
        <div>
            <h1>
                <div>
                    <h1>Your Task:</h1>
                </div>
                {/* ToDo: Aplicar un For/Map para renderizar una lista */}
                <TaskComponent task={defaultTask}>

                </TaskComponent>
            </h1>
        </div>
    );
};

export default TaskListComponent;
