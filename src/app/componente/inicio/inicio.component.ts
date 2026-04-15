import { CineService } from '../../servicios/cine.service';
import { IAVisual } from '../IAVisual';
import { LanguageService } from '../../i18n/language.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  readonly languageService = inject(LanguageService);
  readonly t = this.languageService.translations;
  public peliculas: IAVisual[] = [];
  public series: IAVisual[] = [];

  constructor(private data: CineService) {
    this.data.getPeliculas().subscribe((listaPeliculas) => {
      this.peliculas = listaPeliculas;
    });

    this.data.getSeries().subscribe((listaSeries) => {
      this.series = listaSeries;
    });
  }
  getLocalizedText(value: any): string {
    if (!value) return '';

    if (typeof value === 'string') return value;

    const lang = this.languageService.language();
    return value[lang] ?? value.es ?? value.en ?? '';
  }
}
