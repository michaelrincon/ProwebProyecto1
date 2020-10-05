import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaListComponent } from './respuesta-list.component';

describe('RespuestaListComponent', () => {
  let component: RespuestaListComponent;
  let fixture: ComponentFixture<RespuestaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
