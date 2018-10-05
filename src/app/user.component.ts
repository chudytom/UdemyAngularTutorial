import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p> Hello {{myName}} </p>
    <input type="text" (input)="onInput($event)" value="Me"/>
    `
})
export class UserComponent {
  public myName = 'No one';

  public onInput(event: KeyboardEvent) {
    this.myName = (<HTMLInputElement>event.target).value;
  }
}
