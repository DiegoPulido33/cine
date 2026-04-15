import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IAVisual } from '../IAVisual';
import { CineService } from '../../servicios/cine.service';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  readonly languageService = inject(LanguageService);
  readonly t = this.languageService.translations;

  public peliculas: IAVisual[] = [];

  constructor(private data: CineService) {
    this.data.getPeliculas().subscribe((listaPeliculas) => {
      this.peliculas = listaPeliculas;
    });
  }

  getLocalizedText(value: any): string {
    if (!value) return '';
    if (typeof value === 'string') return value;

    const lang = this.languageService.language();
    return value[lang] ?? value.es ?? value.en ?? '';
  }

  toggleFlip(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.toggle('flipped');
  }
}