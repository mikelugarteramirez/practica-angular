import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Output() eventClickAdd: EventEmitter<boolean> = new EventEmitter();
  @Input() show = false; 

  clickButton() {
    this.eventClickAdd.emit(!this.show);
  }

}
