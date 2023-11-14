import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }

  getUsuariosRedesSociales(){
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesInfo(){
    delay(2000);
    return this.getUsuariosRedesSociales()
      .pipe(
        map( data =>{
          const labels = Object.keys(data);
          const values = Object.values(data);
          return {labels, values}
        })
      )
  }

}
