import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
  <h3>Contador: {{counter}}</h3>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="resetCounter()">===</button>
  <button (click)="increaseBy(1)">+1</button>
  `
})
export class CounterComponent {

  public counter: number = 20


  increaseBy(value : number) : void {
    this.counter += value
  }

  resetCounter() :void {
    this.counter = 20
  }

}
