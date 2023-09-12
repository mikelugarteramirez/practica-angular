import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-juego',
  templateUrl: './formulario-juego.component.html',
  styleUrls: ['./formulario-juego.component.css']
})
export class FormularioJuegoComponent {
  formulario = new FormGroup({
    nombre: new FormControl(null, [Validators.required]),
    desarrolador: new FormControl(null, [Validators.required]),
    precio: new FormControl(null, [Validators.required]),
    descuento: new FormControl(null, [Validators.required]),
    fechaLanzamiento: new FormControl(null, [Validators.required]),
    genero: new FormControl(null, [Validators.required]),
    plataformas: new FormArray([
      new FormGroup({
        nombre: new FormControl(null, [Validators.required]),
        icon: new FormControl(null, [Validators.required]),
      })
    ])
  })
}
