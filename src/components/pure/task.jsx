import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

//Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'

const TaskComponent = ({ task, complete, remove }) => {

    //Non fa quasi niente, soltanto un messaggio
    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (<h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENT:
                return (<h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.BLOCKING:
                return (<h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
            default:
                break;
        }
    }

    // Funtion that returns ucib dependig on completion
    function taskCompletedIcon() {
        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color:'green'}}></i>)

        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color:'grey'}}></i>)   
        }
    }

    return (
        // fw-normal es font-weight
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>

            <td className='align-middle'>
                <span>{task.description}</span>
            </td>

            <td className='align-middle'>
                {/* ToDo: sustituir por un badge */}
                {/* <span>{task.level}</span> */}
                {/* Execution of function to return badge element */}
                { taskLevelBadge() }
            </td>

            <td className='align-middle'>
                {/* ToDo: sustituir por iconos */}
                {/* {task.completed ? (<i className='bi-toggle-on' style={{color:'green'}}></i>) : (<i className='bi-toggle-off' style={{color:'grey'}}></i>)    
                } */}
                {/* Execution of function to return icon dependig on completion */}
                {taskCompletedIcon()}

                <i className='bi-trash task-action' onClick={() => remove(task)} style={{color:'tomato', fontWeight: 'bold'}}></i> 


                {/* <span>{task.completed ? 'Completed' : 'pendings'}</span> */}
            </td>

        </tr>

        /*
    * Function that returns a Badge depending on the level of the task
     */
    


        // <div>
        //     <h2 className='task-name'>
        //        Name: { task.name }
        //     </h2>
        //     <h3>
        //         Descripcion: { task.description }
        //     </h3>
        //     <h4>
        //         Level: { task.level }
        //     </h4>
        //     <h5>
        //         This task is: { task.completed ? 'COMPLETED':'PENDING' }
        //     </h5>
        // </div>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default TaskComponent;