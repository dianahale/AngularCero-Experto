import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//Realizar validaciones a partir de propiedades declaradas en una clase
import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern( this.vs.nombreApellidoPattern )]  ],
    email: ['', [ Validators.required, Validators.pattern( this.vs.emailPattern )], [this.emailValidator]  ],
    username: ['', [ Validators.required, this.vs.noPuedeSerStrider ]  ],
    password: ['', [ Validators.required, Validators.minLength(6) ]  ],
    confirmarPassword: ['', [ Validators.required ]  ],
  }, {
    validators: [ this.vs.camposIguales('password', 'confirmarPassword')]
  })

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {

    
    this.miFormulario.reset({
      nombre:'Diana Hernandez',
      email: 'test1@test.com',
      username: 'diana.07',
      password:'123456',
      confirmarPassword:'123456',
    })
    
  }

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if( errors?.['required']){
      return 'El campo email es obligatorio';
    }else if(errors?.['pattern']){
      return 'El valor ingresado no tiene formato de correo'
    }else if(errors?.['emailTomado']){
      return 'El email ya está en uso'
    }
    return '';
  }

  campoNoValido( campo: string ){
    return this.miFormulario.get(campo)?.invalid
        && this.miFormulario.get(campo)?.touched;
  }


  //Forma de mostrar errores personalizados
  // emailRequired(){
  //   return this.miFormulario.get('email')?.errors?.['required']
  //       && this.miFormulario.get('email')?.touched;
  // }
  // emailTomado(){
  //   return this.miFormulario.get('email')?.errors?.['emailTomado']
  //       && this.miFormulario.get('email')?.touched;
  // }
  // emailFormato(){
  //   return this.miFormulario.get('email')?.errors?.['pattern']
  //       && this.miFormulario.get('email')?.touched;
  // }

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
