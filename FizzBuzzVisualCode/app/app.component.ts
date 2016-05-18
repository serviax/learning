import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App running at'+ new Date().toISOString() + '</h1>',
})
export class AppComponent {
 }