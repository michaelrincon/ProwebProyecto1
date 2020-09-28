import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaViewComponent } from './tema-view.component';

describe('TemaViewComponent', () => {
  let component: TemaViewComponent;
  let fixture: ComponentFixture<TemaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
