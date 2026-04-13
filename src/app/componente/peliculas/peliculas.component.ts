import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IAVisual } from '../IAVisual';
import { CineService } from '../../servicios/cine.service';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  public peliculas: IAVisual[] = [];

  constructor(private data: CineService) {
    this.data.getPeliculas().subscribe((listaPeliculas) => {
      this.peliculas = listaPeliculas;
    });
  }

  toggleFlip(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.toggle('flipped');
  }
}