"use strict";
var FizzBuzzService = (function () {
    function FizzBuzzService() {
    }
    FizzBuzzService.prototype.CalculateValue = function (value) {
        var message = "";
        if (value % 3 == 0 || value % 5 == 0) {
            if (value % 3 == 0) {
                message = "Fizz";
            }
            if (value % 5 == 0) {
                message += "Buzz";
            }
        }
        else {
            message = value.toString();
        }
        return message;
    };
    return FizzBuzzService;
}());
exports.FizzBuzzService = FizzBuzzService;
//# sourceMappingURL=fizz-buzz-service.js.map