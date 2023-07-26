import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 chars long')
            .matches(/[a-zA-Z0-9]/, 'Password can only contain Latin letters'),
    }
)

const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h1>Login Formik</h1>
            <Formik
                initialValues={
                    initialCredentials
                }

                validationSchema={loginSchema}

                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 3000));
                    alert(JSON.stringify(values, null, 2));
                    //We save the data in localstorage
                    localStorage.setItem('credentials', values)
                }}
            >

                {/* We obtain props from Formik */}

                {/* {props => {
                    const {
                        values, //retrieve values at any time
                        touched, //to know if users touch a field
                        errors, //Errors inside a field
                        isSubmitting, //Data send or not
                        handleChange, //if a field is changed
                        handleBlur, //Change of focus

                    } = props;

                    return ( <Form>
                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="jane@acme.com"
                                type="email"
                            />

                            {
                                errors.email && touched.email &&
                                (
                                    <div className='error'>
                                        <p>{errors.email}</p>
                                    </div>
                                )

                            }

                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" placeholder="****"
                                type="password"
                            />

                            {
                                errors.password && touched.password &&
                                (
                                    <div className='error'>
                                        <p>{errors.password}</p>
                                    </div>
                                )

                            }

                            <button type="submit">Submit</button>
                            { isSubmitting ? (<p>Login your credentials...</p>) : null }
                        </Form> )
                }}
                        
                        
                        */}

                {({ values,
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        {/* <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="Jane" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Doe" /> */}

                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />

                        {/* {
                            errors.email && touched.email &&
                            (
                                <div className='error'>
                                    <p>{errors.email}</p>
                                </div>
                            )
                        } */}

                        {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                        ) : null}
                        <ErrorMessage name="email" />

                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" placeholder="****" type="password"
                        />
{/* 
                        {
                            errors.password && touched.password &&
                            (
                                <div className='error'>
                                    <p>{errors.password}</p>
                                </div>
                            )
                        } */}

                        {errors.password && touched.password &&
                        
                        <ErrorMessage component='div' name="password" />
                        }
                        
                        <button type="submit">Submit</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )}






            </Formik>
        </div>
    );
}

export default LoginFormik;
