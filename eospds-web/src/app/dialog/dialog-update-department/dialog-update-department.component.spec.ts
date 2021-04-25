import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateDepartmentComponent } from './dialog-update-department.component';

describe('DialogUpdateDepartmentComponent', () => {
  let component: DialogUpdateDepartmentComponent;
  let fixture: ComponentFixture<DialogUpdateDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
