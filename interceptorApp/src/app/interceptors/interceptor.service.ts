import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable( { providedIn: 'root' } )

/**
 * !Los Interceptores son utiles para manejo de errores o mandar los headers y params en una petición ya que todas peticiones Http pasan por el
 */

export class InterceptorService implements HttpInterceptor {

  /**
   * !  req: es lo recibe, de algún tipo
   * ? Todas las peticiones http pasan por el interceptor
   * ?  next: la siguiente acción que se va a realizar despues de acabar el metodo del interceptor
   * *  Retorna un Onservable de un evento Http de algún tipo
   */

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
    const headers = new HttpHeaders({
      'token-usuario': 'ABDHJDOSMKLSCLMCDMKLDCNLREIBHSOIL'
    });



    //?Clonar la req para poder trabajar con esta, clonarla antes de ser manipulada

    const reqClone = req.clone({
      //* Mandar los headers en el clone
      headers
    });


    return next.handle(reqClone).pipe(
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