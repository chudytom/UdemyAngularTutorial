import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <input type="text"  (input)="onTextChanged($event)" [value]="myName">
  <p> Hello {{myName}} </p>
    `
})
export class UserComponent {
  @Input()
  public myName;
  @Output()
  public nameChanged = new EventEmitter<string>();

  public onTextChanged(event: Event) {
    this.nameChanged.emit((<HTMLInputElement>event.target).value);
  }


}
