import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class FizzBuzzOnlineService {
    
    private apiUrl = "http://localhost:5000/api/FizzBuzz/15";
    
    constructor(private http: Http)
    {
    }
    
    getTranslatedValue(inputValue : number): Observable<string> {
        var value = this.http.get(this.apiUrl)
                            .map(this.extractData)
        return value;
    }
    
    private extractData(response: Response) : string
    {
        let body = response.json();
        return body.data || "could not extract";
    }
}