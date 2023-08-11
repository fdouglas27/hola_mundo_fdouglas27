import React from 'react';

const AsyncExample = () => {

    async function generateNumber() {
        return 1;
    }

    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    function obtainNumber() {
        //los procesos asincronos se consumen como si fueran promesas por eso uso el "then"
        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
    }
    function obtainPromiseNumber() {
        //los procesos asincronos se consumen como si fueran promesas por eso uso el "then"
        generatePromiseNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))

    }

    async function saveSessionStorage(key, value) {
        // await sessionStorage.setItem(key,value);
        await sessionStorage.setItem(key, value);

        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage() {
        saveSessionStorage('name', 'Federico')
            // "response" is the result of "resolve" in async function "saveSessionStorage"
            // "response" is NOT a reserved word it can be anything
            .then((response) => {
                let value = response;
                alert(`Save name: ${value}`);
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
            .finally(() => console.log('Name saved and retrieved successfully!'))
        // "finally" is execute when everything its ok, it´s a void function
    }

    async function obtainMessage() {
        // "resolve" and "reject" are functions
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello World'), 2000)
        });

        // "message" awaits for promise to finish
        let message = await promise;

        await alert(`Message received: ${message}`)
    }

    const returnError = async() => {
        await Promise.reject(new Error('Oooops!'))
    }

    const consumeError = () => {
        // Here I execute the function returnError
        returnError()
            .then((response) => alert(`Everything is Ok: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => alert('Finally executed'))
    }

    const urlNotFound = async () => {
        try {
            //fetch return a future value of a petition to a resource 
            //fetch is use to obtain 
            let response = await fetch('https://invalidURL.com')
            // "response" it´s a JSON file
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Something went wrong with your URL: "${error}" (check your console)`)
        }
    }

    const multiplePromises = async () => {

        // "Promise.all" awaits to every promise to be resolved before continues
        
        /*Promises have three states:
            Pending: the promise awaits to be call
            Fulfilled: when promise is completed (.then can be executed)
            Rejected: promise is rejected or has an error (.catch can be executed)
        */ 

        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page2'),
                fetch('https://invalidURL.com')
            ]
        ).catch((error) => alert(`Something went wrong with your URLs: ${error} (check your console)`))
        .finally(() => alert('Finally executes'))
    }

    return (
        <div>
            <button onClick={ obtainNumber }>Obtain Number</button>
            <button onClick={ obtainPromiseNumber }>Obtain Promise Number</button>
            <button onClick={ showStorage }>Save name and show</button>
            <button onClick={ obtainMessage }>Receive message in 2 seconds</button>
            <button onClick={ consumeError }>Obtain Error</button>
            <button onClick={ urlNotFound }>Request to Unknown URL</button>
            <button onClick={ multiplePromises }>Multiple Promises</button>
        </div>
    );
}

export default AsyncExample;
