import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioListComponent } from './comentario-list.component';

describe('ComentarioListComponent', () => {
  let component: ComentarioListComponent;
  let fixture: ComponentFixture<ComentarioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
