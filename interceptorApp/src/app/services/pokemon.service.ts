import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }


  
  /**
   * ?Demostración de como agregar params y headers a la petición... como obtener solo la data de la resp
  */   
  obtenerPokemones  (){ 
    //!Params utilizando: HttpParams 
    //a la constante no se le pueden agregar mas parametros, como variable si 
    // const params = new HttpParams().append('page', '2');
    let params = new HttpParams().append('limit', '20');
    params = params.append('offset', '20');

    //!Headers utilizando: HttpHeaders 
    const headers = new HttpHeaders({
      'token-usuario': 'ABDHJDOSMKLSCLMCDMKLDCNLREIBHSOIL'
    });

    return this.http.get('https://pokeapi.co/api/v2/pokemon', {
      params,
      headers
    }).pipe(
      map((resp:any) => resp.results)
      //o tambien: 
      // map((resp:any) => resp['results'])
    );
  }


  /**
   * ?Demostración de map, throwError y catchError: manejo de errores
   * !cathError (atrapa el error)
  */   
  obtenerPokemon(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/dittovgy', {
    }).pipe(
      map((resp:any) => resp['name']),
      catchError( this.manejarError )
    );
  }

  manejarError( error: HttpErrorResponse ){
    console.log('sucedio un error');
    console.log('Registrado en los logs');
    console.warn(error);
    return throwError(()=>'Error Personalizado');
  }

}
