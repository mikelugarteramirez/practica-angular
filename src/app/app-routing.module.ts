import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EstrenosComponent } from './estrenos/estrenos.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  { path: '', redirectTo: '/estrenos', pathMatch: 'full' },
  { path: 'estrenos', component: EstrenosComponent },
  { path: 'juegos', component: HomeComponent },
  { path: 'juego/:id', component: DetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }