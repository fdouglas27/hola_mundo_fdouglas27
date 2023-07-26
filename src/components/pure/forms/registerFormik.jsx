import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//Models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    // role: Yup.string()
    //     .oneOf[[ROLES.USER, ROLES.ADMIN], 'You must select one role']
    //     .requiered('The role is required'),

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username to long')
                .required('Username is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'Password must match!'
                    )
                }).required('You must confirm the password ')
        }
    )

    const submit = (values) => {
        alert('Register User')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                // *** YUP Validation Schema ***
                validationSchema={registerSchema}
                // *** Onsubmit event ***
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 2000));
                    alert(JSON.stringify(values, null, 2))
                }}
            >

                {({ values,
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        
                        <Field
                            id="username"
                            name="username"
                            placeholder="Username"
                            type="text"
                        />

                        {errors.username && touched.username &&
                            <ErrorMessage name="username" component="div" />

                        }

                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />

                        {errors.email && touched.email &&
                            <ErrorMessage name="email" component="div" />
                        }

                        {/* <label htmlFor="role">User Role</label>
                        <Field id="role" name="role" placeholder="****" type="text"
                        />
                       
                        {errors.role && touched.role &&

                            <ErrorMessage component='div' name="role" />
                        } */}

                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" placeholder="****" type="password"
                        />

                        {errors.password && touched.password &&
                            <ErrorMessage component='div' name="password" />
                        }

                        <label htmlFor="confirm">Password</label>
                        <Field id="confirm" name="confirm" placeholder="****" type="password"
                        />

                        {errors.confirm && touched.confirm &&
                            <ErrorMessage component='div' name="confirm " />
                        }

                        <button type="submit">Register Acount</button>
                        {isSubmitting ? (<p>Sending your credentials...</p>) : null}
                    </Form>
                )}



            </Formik>
        </div>
    );
}

export default RegisterFormik;
