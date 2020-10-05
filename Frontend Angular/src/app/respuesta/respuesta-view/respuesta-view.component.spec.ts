import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaViewComponent } from './respuesta-view.component';

describe('RespuestaViewComponent', () => {
  let component: RespuestaViewComponent;
  let fixture: ComponentFixture<RespuestaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
