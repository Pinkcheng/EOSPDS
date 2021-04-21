import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddStaffComponent } from './modal-add-staff.component';

describe('ModalAddStaffComponent', () => {
  let component: ModalAddStaffComponent;
  let fixture: ComponentFixture<ModalAddStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
