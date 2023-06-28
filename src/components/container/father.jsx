import React, { useState } from 'react';
// ? "useRef" se utiliza para referencia elementos 
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Federico');

    function showMessage(text){
        alert(`Message received: ${text}`)
    }

    function updateName(newName) {
        setName(newName);
    }

    return (
        <div style={{background: 'tomato', padding: '10px'}}>
            {/* los props name y send son los que se reciben en child., en el button 4 uso showMessage */}
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
