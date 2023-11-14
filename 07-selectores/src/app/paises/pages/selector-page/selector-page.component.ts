import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/pais.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  //Llenar los selectores
  regiones:   string   [] = [];
  paises:     PaisSmall[] = [];
  fronteras:  PaisSmall[] = [];

  //UI
  cargando: boolean= false;

  miFormulario: FormGroup= this.fb.group({
    region:   ['', Validators.required],
    pais:     ['', Validators.required],
    frontera: ['', Validators.required]
  })


  constructor( 
    private fb: FormBuilder
    , private paisesService: PaisesService 
  ) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    //
    //Ocupando switch map de rxjs/operators
    this.miFormulario.get('region')?.valueChanges
        .pipe(
          tap( (_) =>{
            this.miFormulario.get('pais')?.reset('');
            this.cargando = true;
          }),
          switchMap(region => this.paisesService.getPaisesPorRegion(region))
        )
        .subscribe(paises => {
          this.paises=paises;
          this.cargando = false;
        });


        //Cuando el pais cambie
    this.miFormulario.get('pais')?.valueChanges
        .pipe( 
          tap( (_) => {
            this.fronteras = [];
            this.miFormulario.get('frontera')?.reset('');
            this.cargando = true;
          }),
          switchMap(codigo => this.paisesService.getPaisPorCodigo(codigo)),
          switchMap( pais => this.paisesService.getPaisesPorCodigos( pais?.borders! ))
        )
        .subscribe(paises =>{
          // this.fronteras = pais?.borders || [];
          console.log(paises);
          this.fronteras = paises;
          this.cargando = false;
        });
  }
  
  guardar(){
    console.log(this.miFormulario.value);
  }

}


        //Forma sin switch map
    // this.miFormulario.get('region')?.valueChanges
    //     .subscribe( region =>{
    //       console.log(region);

    //       this.paisesService.getPaisesPorRegion(region)
    //           .subscribe(paises => {
    //             this.paises=paises;
    //             console.log(paises);
    //           })
    //     });
