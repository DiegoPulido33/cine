import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  
  public opciones = [
    { texto: 'Inicio', ruta: '/inicio' },
    { texto: 'Películas', ruta: '/peliculas' },
    { texto: 'Series', ruta: '/series' },
  ];
}