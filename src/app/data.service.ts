import {Injectable} from '@angular/core';
import {Item} from './item.service';

@Injectable()
export class DataService{

  items: Item[]=
    [
      { purchase: "Хлеб", done: false, price: 15.9 },
      { purchase: "Масло", done: false, price: 60 },
      { purchase: "Картофель", done: true, price: 22.6 },
      { purchase: "Сыр", done: false, price:310 }
    ];

  getData(): Item[] {
    return this.items;
  }

  addItem(text: string, price: number): void {
    if (text == null || text.trim()=="" || price==null)
      return;
    this.items.push(new Item(text, price));
  }
}
