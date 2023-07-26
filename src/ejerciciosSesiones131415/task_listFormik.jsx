import React, { useState, useEffect } from 'react';
import TaskComponent from '../components/pure/task';

import { Task } from '../models/task.class';
import { LEVELS } from '../models/levels.enum';

import '../styles/task.scss'
import TaskFormik from './taskFormik';

const TaskListFormikComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description2', true, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description3', true, LEVELS.BLOCKING);

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');

        setTimeout(() => {
            setLoading(false);
        }, 2000)

        return () => {
            console.log('TaskList component is going to Unmount...');
        };
    }, [tasks]);


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
        // const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return (

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
        )
    }

    let tasksTable = <Table></Table>;

    if (tasks.length > 0) {
        tasksTable = <Table></Table>;
    } else {
        tasksTable = (
            <div>
                <h5>There are not tasks to show</h5>
                <h6>Plese, create one</h6>
            </div>
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>

                    <div className='card-header p-3'>
                        <h5>
                            Your tasks:
                        </h5>
                    </div>

                    <div className='card-body' data-mb-perfect-scrollbar style={{ position: 'relative', height: '400px' }}>
                        {loading ? (<p style={loadingStyle}>Loading Tasks</p>) : tasksTable}

                    </div>

                </div>
            </div>
            {/* Aca uso Formik para presentar el formulario dentro de la aplicación */}
            <TaskFormik add={addTask} length={tasks.length}></TaskFormik>
        </div>
    );
};

export default TaskListFormikComponent;