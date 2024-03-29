import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService : PaisService ) { }

  ngOnInit(): void {
    // Ambos bloques de código tienen la misma función, la primera ocupa switchMap
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe( pais => this.pais = pais);

    // this.activatedRoute.params
    //   .subscribe( ({id}) => {
    //     console.log(id);

    //     this.paisService.buscarPorAlpha(id)
    //       .subscribe( pais =>{
    //         console.log(pais);
    //       });
    //   });
  }
}
