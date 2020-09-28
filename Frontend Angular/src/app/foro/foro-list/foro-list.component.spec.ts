import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoListComponent } from './foro-list.component';

describe('ForoListComponent', () => {
  let component: ForoListComponent;
  let fixture: ComponentFixture<ForoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
