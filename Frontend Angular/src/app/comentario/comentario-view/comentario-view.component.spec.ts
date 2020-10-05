import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioViewComponent } from './comentario-view.component';

describe('ComentarioViewComponent', () => {
  let component: ComentarioViewComponent;
  let fixture: ComponentFixture<ComentarioViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
