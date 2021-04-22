import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonManualDispatchComponent } from './button-manual-dispatch.component';

describe('ButtonManualDispatchComponent', () => {
  let component: ButtonManualDispatchComponent;
  let fixture: ComponentFixture<ButtonManualDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonManualDispatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonManualDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
