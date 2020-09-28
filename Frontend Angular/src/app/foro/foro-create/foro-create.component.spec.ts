import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoCreateComponent } from './foro-create.component';

describe('ForoCreateComponent', () => {
  let component: ForoCreateComponent;
  let fixture: ComponentFixture<ForoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
