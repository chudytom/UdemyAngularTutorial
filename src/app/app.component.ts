import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'udemy-tutorial';
  public outerName = 'Tomek';
  cart = ['Apples', 'Bananas', 'Cherries'];

  public onNameChanged(passedValue: string) {
    this.outerName = passedValue;
  }

  public onAddItemClicked(newItemName: string) {
    this.cart.push(newItemName);
    console.log('Items in parent component:');
    console.log(this.cart);
  }
}
