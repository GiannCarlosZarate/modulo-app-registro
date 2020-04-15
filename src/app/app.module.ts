import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistradoComponent } from './registrado/registrado.component';
import { VerificadoComponent } from './verificado/verificado.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistradoComponent,
    VerificadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
