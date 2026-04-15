import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './componente/peliculas/peliculas.component';
import { NgModule } from '@angular/core';
import { SeriesComponent } from './componente/series/series.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { ContenidoPeliculaComponent } from './componente/contenido-pelicula/contenido-pelicula.component';
import { ContenidoSerieComponent } from './componente/contenido-serie/contenido-serie.component';
import { AboutComponent } from './componente/about/about.component';
import { ContactComponent } from './componente/contact/contact.component';
import { PrivacyPolicyComponent } from './componente/privacy-policy/privacy-policy.component';
import { TermsComponent } from './componente/terms/terms.component';

export const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'contenido-pelicula/:id', component: ContenidoPeliculaComponent },
  { path: 'contenido-serie/:id', component: ContenidoSerieComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}