import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

//importamos la hoja de estilos de task.scss
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description2', true, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description3', true, LEVELS.BLOCKING);

    //Estado del componente 
    // ! Es realmente importante poner los corchetes [] para hacer que "tasks" sea un array, sino despues no toma el ".map" porque no es un arreglo
    // ? puedo utilizar esta funcion para ver si es un array o no
    // <div>
    //   {Array.isArray(obj)
    //     ? obj.map(element => {
    //         return <h2>{element}</h2>;
    //       })
    //     : null}
    // </div>

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');

        setLoading(false);

        return () => {
            console.log('TaskList component is going to UNmount...');
        };
    }, [tasks]);

    //esto NO se utiliza!
    // const changeState = (id) => {
    //     console.log('ToDo: Cambiar estado de una tarea')
    // }

    function completedtask(task) {
        console.log('complete this task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        //We update the state of the component with the new list of tasks and it will update the iteration of the tasks to show task updated. 
        setTasks(tempTasks);
    }

    function removeTask(task) {
        console.log('Remove this task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1)
        setTasks(tempTasks);
    }

    function addTask(task) {
        console.log('Remove this task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    // tasks.map((tasko,index) => {
    //     return(
    //     key={index}
    //     task={tasko}
    //     )
    // })

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
                                {/* <TaskComponent task={tasks}>

            </TaskComponent>  */}
                                {tasks.map((task, index) => {
                                    return (

                                        <TaskComponent
                                            key={index}
                                            task={task}
                                            complete={completedtask}
                                            remove={removeTask}
                                        >

                                        </TaskComponent>

                                    )
                                })}

                            </tbody>

                        </table>
                    </div>

                </div>

            </div>
            {/* ToDo: Aplicar un For/Map para renderizar una lista */}
            {/* <TaskComponent task={defaultTask}>

            </TaskComponent> */}

            <TaskForm add={addTask}></TaskForm>
        </div>
    );
};

export default TaskListComponent;
