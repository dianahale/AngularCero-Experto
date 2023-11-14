import { Component } from '@angular/core';
import { interval, timeout } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: []
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';
  
  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino': 'invitarla'
  }
  
  //i18nPlural

  clientes: string[] = ['Maria', 'Pedro', 'Juan','Daniel','Gabriela'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Fernando';
    this.genero = 'masculino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe

  persona={
    nombre: 'Laura',
    edad: 22,
    direccion: 'Veracruz, Mexico'
  }


  //Json Pipe

  heroes=[
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe

  miObservable = interval(5000);

  valorPromesa = new Promise ((resolve, reject) =>{
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });

}
