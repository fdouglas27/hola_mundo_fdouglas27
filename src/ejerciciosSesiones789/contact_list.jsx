import React, { useState } from 'react';
import ContactComponent from './contact';

import '../ejerciciosSesiones789/contact.scss'
import ContactForm from './contact_Form';
import { Contact } from './contact.class';

const ContactListComponent = () => {

    const defaultContact1 = new Contact('Federico', 'Douglas Price', 'fede@douglas.com', true);
    const defaultContact2 = new Contact('Juan', 'Perez', 'juan@perez.com', false);

    const [contacts, setContacts] = useState([defaultContact1,defaultContact2]);

    function stateContact(contact) {
        console.log('complete this task: ', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].state = !tempContacts[index].state;
        //We update the state of the component with the new list of Contacts and it will update the iteration of the Contacts to show task updated. 
        setContacts(tempContacts);
    }

    function eliminateContact(contact) {
        console.log('Remove this contact: ', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1)
        setContacts(tempContacts);
    }

    function addContact(contact) {
        console.log('Remove this contact: ', contact);
        // const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    return (
        <div>
            <div className='col-12'>

                <div className='card'>
                    {/* p-3 es el padding */}
                    {/* Card Header { title } */}
                    <div className='card-header p-3'>
                        <h5>
                            Contact Information:
                        </h5>
                    </div>

                    {/* Card Body { content } */}
                    <div className='card-body' data-mb-perfect-scrollbar style={{ position: 'relative', height: '400px' }}>
                        <table>

                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>State</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <TaskComponent task={tasks}>

            </TaskComponent>  */}
                                {contacts.map((contact, index) => {
                                    return (

                                        <ContactComponent
                                            key={index}
                                            contact={contact}
                                            state={stateContact}
                                            eliminate={eliminateContact}
                                            // complete={completedtask}
                                        >

                                        </ContactComponent>

                                    )
                                })}

                            </tbody>

                        </table>
                    </div>

                </div>

            </div>
            {/* ToDo: Aplicar un For/Map para renderizar una lista */}
            {/* <TaskComponent task={defaultTask}>

            </TaskComponent> */}

            <ContactForm add={addContact}></ContactForm>
        </div>
    );
}

export default ContactListComponent;
