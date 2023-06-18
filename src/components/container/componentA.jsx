import React from 'react';
import { Contact } from '../../models/contact.class';
import ComponentBComponent from '../pure/componentB';

const ComponentAComponent = () => {

    const defaultContact = new Contact('Federico', 'Douglas', 'fede@douglas.com', false);

    return (
        <div>
        <h1>Contact Information</h1>

        <ComponentBComponent contact={defaultContact}>

        </ComponentBComponent>
            
        </div>
    );
};

export default ComponentAComponent;
