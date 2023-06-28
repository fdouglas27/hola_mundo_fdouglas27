import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ComponentBComponent = ({ contact }) => {

    const [disponibility, setDisponibility] = useState(contact.connected);

    const stateDisponibility = () => {
        setDisponibility( !disponibility )
    }

    let bool = 'false';

    if (disponibility === false) {
        bool = 'Contact OffLine'
    } else {
        bool = 'Contact OnLine';
    }

    return (
        <div>
            <h2>
               Nombre: { contact.name }
            </h2>
            <h3>
                Last Name: {  contact.lastName }
            </h3>
            <h4>
                Email: { contact.email }
            </h4>
            <h5>
                Condition: { bool }
                {/* { contact.connected ? 'OnLine':'Offline' } */}
            </h5>

            <div>
                <button onClick={ stateDisponibility }>
                    Disponibility
                </button>
            </div>
        </div>
    );
};

ComponentBComponent.propTypes = {
contact: PropTypes.instanceOf( Contact )
};

export default ComponentBComponent;
