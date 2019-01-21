import { Component } from "@angular/core";
//Decorator
@Component({
  // HTML keyword
  selector: 'pm-root',
  template:` 
  <div><h1>{{PageTitle}}</h1>
    <div>My First Component</div>
  </div>
  `
})

export class AppComponent {
  PageTitle: string = 'Acme Product Management';
}