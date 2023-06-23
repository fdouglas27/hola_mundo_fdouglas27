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
            <div className='col-12'>

                <div className='card'>
                    {/* p-3 es el padding */}
                    {/* Card Header { title } */}
                    <div className='card-header p-3'>
                        <h5>
                            Your tasks:
                        </h5>
                    </div>

                    {/* Card Body { content } */}
                    <div className='card-body' data-mb-perfect-scrollbar style={{ position: 'relative', height: '400px' }}>
                        <table>

                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {/* ToDo: iterar sobre una lista de tareas */}
                                <TaskComponent task={defaultTask}></TaskComponent>

                            </tbody>

                        </table>
                    </div>

                </div>

            </div>
            {/* ToDo: Aplicar un For/Map para renderizar una lista */}
            {/* <TaskComponent task={defaultTask}>

            </TaskComponent> */}
        </div>
    );
};

export default TaskListComponent;
