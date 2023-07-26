import React, { useRef } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { LEVELS } from '../models/levels.enum';
import { Task } from '../models/task.class';

const TaskFormik = ({ add, length }) => {

    const initialValues = {
        taskName: '',
        taskDescription: '',
        taskCompleted: false,
        taskLevel: LEVELS.NORMAL
    }

    const registerSchema = Yup.object().shape(
        {
            taskName: Yup.string()
                .min(5, 'Title too short')
                .max(12, 'Title to long')
                .required('Title is required'),
            taskDescription: Yup.string()
                .min(1, 'description too short')
                .max(12, 'description to long')
                .required('description is required'),
            taskLevel: Yup.string()
                .required('Level is required'),
        }
    )

    return (
        <div>
            <Formik
                initialValues={initialValues}
                // *** YUP Validation Schema ***
                validationSchema={registerSchema}
                //  *** Onsubmit event ***
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    const newTask = new Task(
                        values.taskName,
                        values.taskDescription,
                        false,
                        values.taskLevel
                    );
                    add(newTask);
                }}
            >

                {({ values,
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (

                    <Form className='d-flex justify-content-center align-items-center mb-4'>

                        <div className='form-outline flex-fill'>

                            <Field
                                id="taskName"
                                name="taskName"
                                placeholder="Name"
                                type="text"
                                className='form-control form-control-lg my-select'
                            />

                            {errors.taskName && touched.taskName &&
                                <ErrorMessage name="taskName" component="div" />

                            }

                            <Field
                                id="taskDescription"
                                name="taskDescription"
                                placeholder="Description"
                                type="text"
                                className='form-control form-control-lg my-select'
                            />

                            {errors.taskDescription && touched.taskDescription &&
                                <ErrorMessage name="taskDescription" component="div" />
                            }

                            {/* {`${task.completed ? "task-completed" : "task-uncompleted"} fw-normal`} */}
                            <Field className={`form-control form-control-lg `} name="taskLevel" as="select">
                                <option className='bg-primary' value={LEVELS.NORMAL}>Normal</option>
                                <option className='bg-warning' value={LEVELS.URGENT}>Urgent</option>
                                <option className='bg-danger' value={LEVELS.BLOCKING}>Bloking</option>
                            </Field>

                            {errors.taskLevel && touched.taskLevel &&
                                <ErrorMessage name="taskLevel" component="div" />
                            }

                            <button className='btn btn-success btn-lg col-md-12' type="submit">
                            {length > 0 ? 'Add New Task' : 'Create First Task'}
                            </button>
                            {isSubmitting ? (<p>Submiting your tasks...</p>) : null}

                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default TaskFormik;
