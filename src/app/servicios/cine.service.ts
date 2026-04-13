import { Injectable } from '@angular/core';
import { IAVisual } from '../componente/IAVisual';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CineService {
  private l_multimedia: IAVisual[] = [];

  constructor(private http: HttpClient) {}

  public getAll(): IAVisual[] {
    return this.l_multimedia;
  }

  // FILTRAR LAS PELÍCULAS
  public getPeliculas(): Observable<IAVisual[]> {
    return this.http.get<IAVisual[]>('/data/peliculas.json');
  }

  // FILTRAR SERIES
  public getSeries(): Observable<IAVisual[]> {
    return this.http.get<IAVisual[]>('/data/series.json');
  }
}
