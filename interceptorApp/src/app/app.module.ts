import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { InterceptorService } from './interceptors/interceptor.service';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    //!Configuración básica de un interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
