import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAutoDispatchComponent } from './modal-auto-dispatch.component';

describe('ModalAutoDispatchComponent', () => {
  let component: ModalAutoDispatchComponent;
  let fixture: ComponentFixture<ModalAutoDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAutoDispatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAutoDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
