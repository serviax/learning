export interface IPerson {
    firstName: string;
    lastName: string;
}

export class Employee implements IPerson {
    firstName: string;
    lastName: string;
    idNumber: number;

    constructor(firstName: string, lastName: string, id: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = id;
    }
}


