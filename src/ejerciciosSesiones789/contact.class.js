export class Contact {
    name = '';
    lastname = '';
    email = '';
    state = false;

    constructor(name, lastname, email, state) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.state = state;
    }
}