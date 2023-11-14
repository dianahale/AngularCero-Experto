import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino:string='';
  heroes : Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;

  //Aportación personal [ no se si está bien 
  resultEmpty: boolean = false;
  //]

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesService.getSugerencias(this.termino.trim())
      .subscribe(heroes => this.heroes = heroes);
  }

  opcionSeleccionada( event:MatAutocompleteSelectedEvent ){

    if(!event.option.value){
       this.heroeSeleccionado=undefined;
        //Aportación personal [ no se si está bien 
              this.resultEmpty=true;
        //]]
      return;
    }
    //Aportación personal [ no se si está bien 
        this.resultEmpty=false;
    //]]
    const heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroePorId(heroe.id!)
      .subscribe(heroe => this.heroeSeleccionado = heroe);

  }
}
