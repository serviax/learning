import { Component, OnInit }   from '@angular/core';

import { FizzBuzzService } from './fizz-buzz-service';

@Component({
    selector: 'fizz-buzz-app',
    templateUrl : 'app/fizz-buzz-template.html',
    providers: [FizzBuzzService]
})

export class FizzBuzzListComponent implements OnInit {
    constructor(private fizzBuzzService: FizzBuzzService)
    {
    }
    
    printoutValue: string;
    inputValue: string;
    
    ngOnInit() { 
        this.printoutValue = "";
        }
    
    OnValueChanged(testValue:string) {
        this.printoutValue = this.fizzBuzzService.CalculateValue(testValue);
    }
}