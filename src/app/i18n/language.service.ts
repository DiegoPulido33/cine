import { Injectable, signal, computed } from '@angular/core';
import { ES_TRANSLATIONS } from './es';
import { EN_TRANSLATIONS } from './en';

export type AppLanguage = 'es' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly currentLanguage = signal<AppLanguage>('en');

  readonly language = this.currentLanguage.asReadonly();

  readonly translations = computed(() => {
    return this.currentLanguage() === 'es'
      ? ES_TRANSLATIONS
      : EN_TRANSLATIONS;
  });

  setLanguage(language: AppLanguage): void {
    this.currentLanguage.set(language);
  }

  toggleLanguage(): void {
    this.currentLanguage.update((lang) => (lang === 'es' ? 'en' : 'es'));
  }

  isSpanish(): boolean {
    return this.currentLanguage() === 'es';
  }

  isEnglish(): boolean {
    return this.currentLanguage() === 'en';
  }
}