import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAVisual } from '../IAVisual';
import { CineService } from '../../servicios/cine.service';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-contenido-pelicula',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contenido-pelicula.component.html',
  styleUrls: ['./contenido-pelicula.component.css'],
})
export class ContenidoPeliculaComponent implements OnInit, OnDestroy {
  readonly languageService = inject(LanguageService);
  readonly t = this.languageService.translations;
  pelicula?: IAVisual;
  private subscription?: Subscription;

  constructor(private route: ActivatedRoute, private cineService: CineService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id)) {
      console.error('El ID proporcionado no es válido.');
      return;
    }

    this.subscription = this.cineService.getPeliculas().subscribe({
      next: (peliculas) => {
        this.pelicula = peliculas.find((p) => p.id === id);
        if (!this.pelicula) {
          console.error('No se encontró la película con el ID especificado.');
        }
      },
      error: (err) => console.error('Error al cargar las películas:', err),
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  getLocalizedText(value: any): string {
    if (!value) return '';
    if (typeof value === 'string') return value;

    const lang = this.languageService.language();
    return value[lang] ?? value.es ?? value.en ?? '';
  }
}