import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames: string[] = ['Iron Man', 'Hawkeye', 'Black Widow', 'Captain America'];
  public deletedHero?: string;

  deleteLastHero(): void{
    this.deletedHero = this.heroesNames.pop();
  }

}
