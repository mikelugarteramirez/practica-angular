import { Component, OnInit } from '@angular/core';
import { Juego } from '../interfaces/juego';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-estrenos',
  templateUrl: './estrenos.component.html',
  styleUrls: ['./estrenos.component.css']
})
export class EstrenosComponent implements OnInit {
  juegos: Juego[] = [];
  limiteEstrenos = 2629743;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getJuegos();
  }
  
  getJuegos(): void {
    //this.juegos = this.homeService.getJuegos();
    // this.homeService.getJuegos().subscribe(juegos => this.juegos = juegos.slice(1, 2));
    this.homeService.getJuegos().subscribe(juegos => {
      console.log(juegos);
      
      this.juegos = juegos.filter(juego => juego.fechaLanzamiento )
    });
  }

}
