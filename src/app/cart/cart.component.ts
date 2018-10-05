import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { random } from 'lodash';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input()
  public cartItems = [];
  @Output()
  public addItemClicked = new EventEmitter<string>();

  public newCartName = '';

  constructor() {}

  ngOnInit() {}

  public onAddItemClicked() {
    this.addItemClicked.emit(random(1, 10).toString());
  }
}
