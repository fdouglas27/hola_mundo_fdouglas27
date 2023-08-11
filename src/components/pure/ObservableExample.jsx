import React, { useState } from 'react';
import {getNumbers} from '../../services/observableService';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    

    const obtainNewNumbers = () => {
        //"getNumbers" it´s an observable NOT a function does not put "()"
        console.log('Subscription to Observable');
        getNumbers.subscribe({
            next(newNumber){
                console.log('New Number: ', newNumber);
                setNumber(newNumber)
            },
            error(error){
                alert(`Something went wrong: ${error}`)
                console.log('Error unobservable')
            },
            complete(){
                alert(`Finished with: ${ number  }`)
                console.log('Done with the observable')
            }
        })
    }

    // console.log('Finished receiving numbers');

    return (
        <div>
            <h2>Number: { number }</h2>
            <button onClick={ obtainNewNumbers }>Obtain New Numbers</button>
        </div>
    );
}

export default ObservableExample;
