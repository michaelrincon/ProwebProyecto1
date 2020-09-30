import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoViewComponent } from './foro-view.component';

describe('ForoViewComponent', () => {
  let component: ForoViewComponent;
  let fixture: ComponentFixture<ForoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
