import { Component } from "@angular/core";


// @Component({
//   selector: 'app-counter',
//   template : '<h1>Hola Counter</h1>'
// })
// export class CounterComponent{

// }


@Component({
  selector: 'app-counter',
  template : `
<h3> Counter en el .ts : {{counter}}</h3>

<button (click)="increasby(1)"> +1</button>
<button (click)="resetCounter()"> Reset</button>
<button (click)="increasby(-1)"> -1</button>
  `
})
export class CounterComponent{
  public counter:number =10;

  increasby(number:number):void{
    this.counter+=number
  }
  resetCounter(){
    this.counter=10
  }

}
