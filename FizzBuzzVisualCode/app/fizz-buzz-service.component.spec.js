"use strict";
var fizz_buzz_service_1 = require('./fizz-buzz-service');
describe('The Fizz Buzz service', function () {
    it('should return Fizz when the provided value(9) is dividable by 3', function () {
        var sut = new fizz_buzz_service_1.FizzBuzzService();
        var result = sut.CalculateValue(9);
        expect(result).toEqual("Fizz");
    });
    it('should return Buzz when the provided value(25) is dividable by 5', function () {
        var sut = new fizz_buzz_service_1.FizzBuzzService();
        var result = sut.CalculateValue(25);
        expect(result).toEqual("Buzz");
    });
    it('should return FizzBuzz when the provided value (45) is dividable by 15', function () {
        var sut = new fizz_buzz_service_1.FizzBuzzService();
        var result = sut.CalculateValue(45);
        expect(result).toEqual("FizzBuzz");
    });
    it('should return a number when the provided value (7) is not dividable by 3 or 15', function () {
        var sut = new fizz_buzz_service_1.FizzBuzzService();
        var result = sut.CalculateValue(7);
        expect(result).toEqual("7");
    });
    it('should return FizzBuzz when the provided value is zero', function () {
        var sut = new fizz_buzz_service_1.FizzBuzzService();
        var result = sut.CalculateValue(7);
        expect(result).toEqual("7");
    });
    it('should return Fuzz when the negative provided value (-12) is dividable by 3', function () {
        var sut = new fizz_buzz_service_1.FizzBuzzService();
        var result = sut.CalculateValue(-12);
        expect(result).toEqual("Fizz");
    });
});
//# sourceMappingURL=fizz-buzz-service.component.spec.js.map