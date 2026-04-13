import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAVisual } from '../IAVisual';
import { CineService } from '../../servicios/cine.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contenido-serie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contenido-serie.component.html',
  styleUrls: ['./contenido-serie.component.css'],
})
export class ContenidoSerieComponent implements OnInit, OnDestroy {
  serie?: IAVisual;
  private subscription?: Subscription;

  constructor(private route: ActivatedRoute, private cineService: CineService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id)) {
      console.error('El ID proporcionado no es válido.');
      return;
    }

    this.subscription = this.cineService.getSeries().subscribe({
      next: (series) => {
        this.serie = series.find((s) => s.id === id);
        if (!this.serie) {
          console.error('No se encontró la serie con el ID especificado.');
        }
      },
      error: (err) => console.error('Error al cargar las series:', err),
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}