import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
  <p [textContent]="loadState"></p>
  <p> Type the name of the month: </p>
  <button (click)="onButtonClick()"> Change month to October</button>
  `
})
export class DashboardComponent {
  public loadState = 'September';

  public onButtonClick() {
    this.loadState = 'October';
  }


}
