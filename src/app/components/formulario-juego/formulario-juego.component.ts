import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Juego } from 'src/app/interfaces/juego';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-formulario-juego',
  templateUrl: './formulario-juego.component.html',
  styleUrls: ['./formulario-juego.component.css']
})
export class FormularioJuegoComponent implements OnInit {

  @Output()
  submitFormEvent: EventEmitter<Juego> = new EventEmitter();
  @Output()
  returnEvent: EventEmitter<undefined> = new EventEmitter();
  @Input()
  dataForm?: Juego;
  @Input()
  typeForm: 'create'|'edit' = 'create';

  formulario: FormGroup = new FormGroup({});

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(this.dataForm?.nombre, [Validators.required]),
      desarrolador: new FormControl(this.dataForm?.desarrolador, [Validators.required]),
      precio: new FormControl(this.dataForm?.precio, [Validators.required]),
      descuento: new FormControl(this.dataForm?.descuento, [Validators.required]),
      fechaLanzamiento: new FormControl(this.dataForm?.fechaLanzamiento, [Validators.required]),
      genero: new FormGroup({
        nombre: new FormControl(this.dataForm?.genero?.nombre, [Validators.required])
      }),
      plataformas: new FormArray(this.dataForm ? this.inputPlataformas : [
        new FormGroup({
          nombre: new FormControl(null, [Validators.required]),
          icon: new FormControl(null, [Validators.required]),
        })
      ])
    });
  }

  get genero() {
    return this.formulario.controls['genero'] as FormGroup;
  }

  get inputPlataformas(): FormGroup[] {
    return this.dataForm!.plataformas!.map((plataforma) => {
      return new FormGroup({
        nombre: new FormControl(plataforma.nombre || null, [Validators.required]),
        icon: new FormControl(plataforma.icon || null, [Validators.required])
      })
    })
  }

  get plataformas() {
    return (this.formulario.controls["plataformas"] as FormArray).controls as FormGroup[];
  }

  submitForm() {
    let id = this.dataForm?.id ? this.dataForm?.id : 123;
    this.submitFormEvent.emit({...this.formulario.value, id})
  }

  eliminarJuego() {
    this.homeService.delete(this.dataForm!.id);
    this.regresar();
  }

  regresar() {
    this.returnEvent.emit();
  }

  agregarPlataforma() {
    this.plataformas.push(new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      icon: new FormControl(null, [Validators.required]),
    }))
  }

  quitarPlataforma(index: number) {
    (this.formulario.controls["plataformas"] as FormArray).removeAt(index)
  }
}
