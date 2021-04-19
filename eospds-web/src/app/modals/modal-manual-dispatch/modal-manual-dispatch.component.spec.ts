import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalManualDispatchComponent } from './modal-manual-dispatch.component';

describe('ModalManualDispatchComponent', () => {
  let component: ModalManualDispatchComponent;
  let fixture: ComponentFixture<ModalManualDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalManualDispatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalManualDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
