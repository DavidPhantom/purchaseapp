import { Component } from '@angular/core';
import {DataService} from './data.service';

class Item {
  purchase: string;
  done: boolean;
  price: number;

  constructor(purchase: string, price: number) {
    this.purchase = purchase;
    this.price = price;
    this.done = false;
  }
}

@Component({
  selector: 'purchase-app',
  templateUrl: './app.component.html',
  providers: [DataService]
})

export class AppComponent {
  text: string = "";
  price: number = 0;
  items: Item[] = [];

  constructor(private dataService: DataService){}

  addItem(text: string, price: number){

    this.dataService.addItem(text, price);
  }
  ngOnInit(){
    this.items = this.dataService.getData();
  }
}
