import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: []
})
export class BasicosComponent {

  nombreLower: string = 'diana';
  nombreUpper: string = 'DIANA';
  nombreCompleto: string = 'dIaNa lAuRa';

  fecha: Date =  new Date(); //el dia de hoy

}
