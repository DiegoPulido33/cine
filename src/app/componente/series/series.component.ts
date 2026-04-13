import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IAVisual } from '../IAVisual';
import { CineService } from '../../servicios/cine.service';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  public series: IAVisual[] = [];

  constructor(private data: CineService) {
    this.data.getSeries().subscribe((listaSeries) => {
      this.series = listaSeries;
    });
  }

  toggleFlip(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.toggle('flipped');
  }
}