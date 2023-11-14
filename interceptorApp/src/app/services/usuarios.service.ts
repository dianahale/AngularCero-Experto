import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerUsuarios  (){
    
    //a la constante no se le pueden agregar mas parametros, como variable si 
    // const params = new HttpParams().append('page', '2');
    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'Diana');

    return this.http.get('https://reqresrcftvgbh.in/api/user', {
      params,
    })
    .pipe(map((resp:any) => resp['data']))
  }

}
