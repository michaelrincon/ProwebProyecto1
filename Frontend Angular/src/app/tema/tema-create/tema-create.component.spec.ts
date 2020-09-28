import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaCreateComponent } from './tema-create.component';

describe('TemaCreateComponent', () => {
  let component: TemaCreateComponent;
  let fixture: ComponentFixture<TemaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
