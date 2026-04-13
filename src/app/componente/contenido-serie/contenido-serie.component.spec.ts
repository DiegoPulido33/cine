import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoSerieComponent } from './contenido-serie.component';

describe('ContenidoSerieComponent', () => {
  let component: ContenidoSerieComponent;
  let fixture: ComponentFixture<ContenidoSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoSerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
