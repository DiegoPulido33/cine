import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly languageService = inject(LanguageService);
  readonly router = inject(Router);

  readonly t = this.languageService.translations;
  readonly mobileMenuOpen = signal(false);

  readonly opciones = computed(() => {
    const tr = this.t();

    return [
      { texto: tr.nav.home, ruta: '/' },
      { texto: tr.nav.movies, ruta: '/peliculas' },
      { texto: tr.nav.series, ruta: '/series' },
    ];
  });

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.mobileMenuOpen.set(false);
      });
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((value) => !value);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}