import { Component, Input } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego';

@Component({
  selector: 'app-card-juego',
  templateUrl: './card-juego.component.html',
  styleUrls: ['./card-juego.component.css']
})
export class CardJuegoComponent {
  @Input()
  juego!: Juego;
}
