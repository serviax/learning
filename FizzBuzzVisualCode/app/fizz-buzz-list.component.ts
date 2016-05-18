import { Component, OnInit }   from '@angular/core';

import { FizzBuzzService } from './fizz-buzz-service';

@Component({
    selector: 'fizz-buzz-app',
    templateUrl : 'app/fizz-buzz-template.html',
    providers: [FizzBuzzService]
})

export class FizzBuzzListComponent implements OnInit {
    constructor(private service: FizzBuzzService)
    {
    }
    
    printoutValue: string;
    
    ngOnInit() { 
        this.printoutValue = this.service.CalculateValue(3);
    }
}