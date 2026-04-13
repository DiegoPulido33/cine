import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoPeliculaComponent } from './contenido-pelicula.component';

describe('ContenidoPeliculaComponent', () => {
  let component: ContenidoPeliculaComponent;
  let fixture: ComponentFixture<ContenidoPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoPeliculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
