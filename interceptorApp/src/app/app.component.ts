import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorApp';

  constructor(
    private pokemonService:PokemonService,
    private usuariosService: UsuariosService
  ){

    /* 
    this.pokemonService.obtenerPokemones()
      .subscribe( resp => {
        console.log('%cObtener pokemones(): Uso de HttpParams y HttpHeaders', 'color: blue');
        console.log(resp);
      });

    this.pokemonService.obtenerPokemon()
      .subscribe({
          next: (resp) => console.log(resp),
          error: ( ) => console.log('%cError en el appComponent (obtener pokemon)', 'color: red')
        });
    */ 

      
    this.usuariosService.obtenerUsuarios()
    .subscribe({ 
      next: (resp) => {
        console.log('%cPetición de usuarios', 'color: blue');
        console.log(resp);
      },
      error: (err) => console.log('%cError en el appComponent', 'color: red')
    });
    
  }
  
}
