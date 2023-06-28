
import React from 'react';
import { Contact } from './contact.class';
import PropTypes from 'prop-types'

const ContactComponent = ({ contact }) => {
    return (

        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.name} {contact.lastname}</span>
            </th>

            <td className='align-middle'>
                <span>{contact.email}</span>
            </td>

            <td className='align-middle'>
              
            </td>

            <td className='align-middle'>
            </td>

        </tr>

    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
}

export default ContactComponent;
