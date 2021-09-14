import { Component } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `<h1>Список покупок - {{name}}</h1>`,
  styles: [`h1, p {color:red;}`]
})
export class ChildComponent {
  name= "David";
}
