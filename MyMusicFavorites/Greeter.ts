// import { MusicManagerModule } from './app.module';
import { Employee } from "./EmployeeInformation";
import { IPerson } from "./EmployeeInformation";

const user = new Employee("Servaas", "Phlips", 5);

function greeter(person: IPerson) {
    // var message = "Hello " + person.firstName + ", how are you doing";
    let myMessage = `Hello ${person.firstName} how are you doing today?`;
    return myMessage;
}

document.body.innerHTML = greeter(user);