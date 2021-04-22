import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAutoDispatchComponent } from './button-auto-dispatch.component';

describe('ButtonAutoDispatchComponent', () => {
  let component: ButtonAutoDispatchComponent;
  let fixture: ComponentFixture<ButtonAutoDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAutoDispatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAutoDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
