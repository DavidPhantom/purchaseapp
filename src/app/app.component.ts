import {Component, Injectable} from '@angular/core';
import {DataService} from './data.service';
import {Item} from './item.service';

@Component({
  selector: 'purchase-app',
  templateUrl: './app.component.html',
  styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
  providers: [DataService]
})

@Injectable()
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
