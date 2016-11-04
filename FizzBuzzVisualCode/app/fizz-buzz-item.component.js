"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var fizz_buzz_online_service_1 = require('./fizz-buzz-online-service');
require('./rxjs-operators');
var FizzBuzzItemComponent = (function () {
    function FizzBuzzItemComponent(fizzBuzzService) {
        this.fizzBuzzService = fizzBuzzService;
    }
    FizzBuzzItemComponent.prototype.ngOnInit = function () {
        this.printoutValue = "";
    };
    FizzBuzzItemComponent.prototype.OnValueChanged = function (testValue) {
        var _this = this;
        var testValueAsNumber = +testValue;
        this.fizzBuzzService.getTranslatedValue(testValueAsNumber).subscribe(function (value) { return _this.printoutValue = value; });
        //this.printoutValue = this.fizzBuzzService.CalculateValue(testValueAsNumber);
    };
    FizzBuzzItemComponent = __decorate([
        core_1.Component({
            selector: 'fizz-buzz-app',
            templateUrl: 'app/fizz-buzz-template.html',
            providers: [fizz_buzz_online_service_1.FizzBuzzOnlineService]
        }), 
        __metadata('design:paramtypes', [fizz_buzz_online_service_1.FizzBuzzOnlineService])
    ], FizzBuzzItemComponent);
    return FizzBuzzItemComponent;
}());
exports.FizzBuzzItemComponent = FizzBuzzItemComponent;
//# sourceMappingURL=fizz-buzz-item.component.js.map