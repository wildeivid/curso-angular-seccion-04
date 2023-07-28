import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman'
  public age: number = 45


  methodConcat() :string {
    return `${this.nameCapitalize} - ${this.age}`
  }

  get nameCapitalize() :string {
    return this.name.toUpperCase()
  }

  changeName() :void {
    this.name = 'Linterna Verde'
  }

  changeEdad() :void {
    this.age = 20
  }

  resetForm() :void {
    this.age = 45
    this.name = 'ironman'
  }

}
