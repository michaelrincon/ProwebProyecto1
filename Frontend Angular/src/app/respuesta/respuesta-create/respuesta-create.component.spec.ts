import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaCreateComponent } from './respuesta-create.component';

describe('RespuestaCreateComponent', () => {
  let component: RespuestaCreateComponent;
  let fixture: ComponentFixture<RespuestaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
