(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
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
    var user = new Employee("Servaas", "Phlips", 5);
    document.body.innerHTML = greeter(user);
});
//# sourceMappingURL=Greeter.js.map