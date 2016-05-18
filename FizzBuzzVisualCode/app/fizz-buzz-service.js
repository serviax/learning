"use strict";
var FizzBuzzService = (function () {
    function FizzBuzzService() {
    }
    FizzBuzzService.prototype.CalculateValue = function (value) {
        if (value % 3 == 0) {
            return "Fizz";
        }
        else if (value % 5 == 0) {
            return "Buzz";
        }
        else {
            return value.toString();
        }
    };
    return FizzBuzzService;
}());
exports.FizzBuzzService = FizzBuzzService;
//# sourceMappingURL=fizz-buzz-service.js.map