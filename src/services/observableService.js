import { Observable, } from "rxjs";

export const getNumbers = new Observable(Subscriber => {
    //we emit values: 
    Subscriber.next(1); //Emits 1
    Subscriber.next(2); //Emits 2
    Subscriber.next(3); //Emits 3
    setTimeout(() => {
        Subscriber.next(4); //Emits 4
        Subscriber.complete(); // Finally, the observable completes and finishes
    }, 1000); // Awaits 1 second
})

// export default 