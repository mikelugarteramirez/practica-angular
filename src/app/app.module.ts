import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertasComponent } from './alertas/alertas.component';
import { EstrenosComponent } from './estrenos/estrenos.component';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import { AgregarComponent } from './components/agregar/agregar.component';
import { FormularioJuegoComponent } from './components/formulario-juego/formulario-juego.component';
import { CardJuegoComponent } from './components/card-juego/card-juego.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    NuevoComponent,
    AlertasComponent,
    EstrenosComponent,
    HomeComponent,
    AgregarComponent,
    FormularioJuegoComponent,
    CardJuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
