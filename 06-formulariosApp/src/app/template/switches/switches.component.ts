import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  constructor() { }

  persona = {
    genero : '',
    notificaciones:true
  }

  terminosCondiciones: boolean = false;

}
