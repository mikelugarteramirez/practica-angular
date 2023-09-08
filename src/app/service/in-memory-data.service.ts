import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const juegos = [
      {
        id: 1,
        nombre: "God of War",
        desarrolador: "Sony",
        descripcion: "El dios de la guerra tiene nuevos enemigos",
        precio: 999,
        descuento: 0,
        fechaLanzamiento: new Date(new Date().getTime()-10),
        genero: {nombre: "Acción"},
        plataformas: [{nombre: "PS",icon: "https://upload.wikimedia.org/wikipedia/commons/0/00/PlayStation_logo.svg"}, {nombre: "Xbox",icon: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Xbox_one_logo.svg"}],
      },
      {
         id: 2,
         nombre: "Halo",
         desarrolador: "Microsoft",
         descripcion: "Soldados espaciales",
         precio: 999,
         descuento: 0,
         fechaLanzamiento: new Date(),
         genero: {nombre: "Acción"},
         plataformas: [{nombre: "Xbox",icon: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Xbox_one_logo.svg"}],
       },
       {
          id: 3,
          nombre: "The legend of Zelda",
          desarrolador: "Nintendo",
          descripcion: "Una aventura más del duende melodía",
          precio: 999,
          descuento: 10,
          fechaLanzamiento: new Date(),
          genero: {nombre: "Aventura"},
          plataformas: [{nombre: "Switch",icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/NintendoSwitchLogo.svg"}],
        },
    ];
    return {juegos};
  }
}
