import { Component, OnInit }   from '@angular/core';

import { FizzBuzzOnlineService  } from './fizz-buzz-online-service';

import './rxjs-operators';

@Component({
    selector: 'fizz-buzz-app',
    templateUrl : 'app/fizz-buzz-template.html',
    providers: [FizzBuzzOnlineService]
})

export class FizzBuzzItemComponent implements OnInit {
    constructor(private fizzBuzzService: FizzBuzzOnlineService)
    {
    }
    
    printoutValue: string;
    inputValue: string;
    
    ngOnInit() { 
        this.printoutValue = "";
        }
    
    OnValueChanged(testValue:string) {
        var testValueAsNumber:number = +testValue;
        this.fizzBuzzService.getTranslatedValue(testValueAsNumber).subscribe(value => this.printoutValue = value);
        
        //this.printoutValue = this.fizzBuzzService.CalculateValue(testValueAsNumber);
    }
}