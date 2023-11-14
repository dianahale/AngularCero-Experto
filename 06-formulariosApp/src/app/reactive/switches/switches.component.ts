import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor( private fb: FormBuilder ) { }

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [true, Validators.required ],
    condiciones: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    });

    //Mantener sincronizado el objeto persona a los cambios que se realice el usuario en el formulario 
    //Forma 1: Obteniendo todo el objeto, es necesario eliminar condiciones ya que no pertenece al objeto persona

    // this.miFormulario.valueChanges.subscribe( form =>{
    //   delete form.condiciones;
    //   this.persona = form;
    // });

    //Forma 2: Desestructuración del objeto para obtener condiciones y luego el resto de propiedades
    this.miFormulario.valueChanges.subscribe( ({condiciones, ...rest}) =>{
      //delete form.condiciones;
      this.persona = rest;
    });
  }

  guardar(){
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue;
  }

}
