import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor( private fb: FormBuilder ) { }

  ngOnInit(){

  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.minLength(3)] ],
    favoritos: this.fb.array([
      ['Very Nightmares', Validators.required],
      ['Super Mario', Validators.required]
    ], Validators.required)
  });

  nuevoFavorito : FormControl = this.fb.control('', Validators.required);

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid ){return}

    //Para insertar un nuevo control se puede realizar mediante el form builder y crear un new FormControl
    // this.favoritosArr.push( new FormControl(this.nuevoFavorito.value, Validators.required) );
    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value, Validators.required));
  
    this.nuevoFavorito.reset();

  }

  campoNoEsValido( campo: string ){
    return this.miFormulario.controls[campo].errors
        && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  borrar(indice: number){
    this.favoritosArr.removeAt(indice);
  }
}
