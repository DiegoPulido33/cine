import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CineService } from '../../servicios/cine.service';
import { IAVisual } from '../IAVisual';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
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
}