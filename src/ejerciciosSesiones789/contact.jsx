
import React from 'react';
import { Contact } from './contact.class';
import PropTypes from 'prop-types'
import '../ejerciciosSesiones789/contact.scss'

const ContactComponent = ({ contact, state, eliminate }) => {

    function contactStateIcon() {
        if(contact.state){
            // return (<i onClick={() => state(contact)} className='bi-toggle-on contact-action' style={{color:'green'}}></i>)
            return (<p onClick={() => state(contact)} className='contact-action' style={{color:'white', background:'green'}} >Connected</p>)
        } else {
            // return (<i onClick={() => state(contact)} className='bi-toggle-off contact-action' style={{color:'grey'}}></i>)   
            return (<p onClick={() => state(contact)} className='contact-action' style={{color:'white', background:'red'}}>Disconnected</p>)
        }
    }

    return (

        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.name} {contact.lastname}</span>
            </th>

            <td className='align-middle'>
                <span>{contact.email}</span>
            </td>

            <td className='align-middle'>
              {contactStateIcon()}
            </td>

            <td className='align-middle'>
            <i className='bi-trash task-action' onClick={() => eliminate(contact)} style={{color:'tomato', fontWeight: 'bold'}}></i> 
            </td>

        </tr>

    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    state: PropTypes.func.isRequired,
    eliminate: PropTypes.func.isRequired
}

export default ContactComponent;
