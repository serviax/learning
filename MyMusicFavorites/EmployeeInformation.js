"use strict";
var Employee = (function () {
    function Employee(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = id;
    }
    return Employee;
}());
exports.Employee = Employee;
function greeter(person) {
    // var message = "Hello " + person.firstName + ", how are you doing";
    var myMessage = "Hello " + person.firstName + " how are you doing today?";
    return myMessage;
}
