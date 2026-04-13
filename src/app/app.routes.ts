import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './componente/peliculas/peliculas.component';
import { NgModule } from '@angular/core';
import { SeriesComponent } from './componente/series/series.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { ContenidoPeliculaComponent } from './componente/contenido-pelicula/contenido-pelicula.component';
import { ContenidoSerieComponent } from './componente/contenido-serie/contenido-serie.component';

export const routes: Routes = [
  { path: 'peliculas', component: PeliculasComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'series', component: SeriesComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'contenido-pelicula/:id', component: ContenidoPeliculaComponent },
  { path: 'contenido-serie/:id', component: ContenidoSerieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
