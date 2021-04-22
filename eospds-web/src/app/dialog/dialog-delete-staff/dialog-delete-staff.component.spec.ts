import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteStaffComponent } from './dialog-delete-staff.component';

describe('DialogDeleteStaffComponent', () => {
  let component: DialogDeleteStaffComponent;
  let fixture: ComponentFixture<DialogDeleteStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
