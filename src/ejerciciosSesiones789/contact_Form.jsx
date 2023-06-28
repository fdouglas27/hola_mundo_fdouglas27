import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from './contact.class';


const ContactForm = ({ add }) => {

    const nameRef = useRef('');
    const lastnameRef = useRef('');
    const emailRef = useRef('');

    function addContact(e) {
        e.preventDefault();

        const newTask = new Contact(
            nameRef.current.value,
            lastnameRef.current.value,
            emailRef.current.value,
            false,
        );

        add(newTask);
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>

            <div className='form-outline flex-fill'>

                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact Name' />

                <input ref={lastnameRef} id='inputLastname' type='text' className='form-control form-control-lg' required placeholder='Contact Lastname' />
                
                <input ref={emailRef} id='inputEmail' type='email' className='form-control form-control-lg' required placeholder='Contact Email' />

                <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
            </div>
        </form>
    );
};


ContactForm.propTypes = {
add: PropTypes.func.isRequired,
};


export default ContactForm;
