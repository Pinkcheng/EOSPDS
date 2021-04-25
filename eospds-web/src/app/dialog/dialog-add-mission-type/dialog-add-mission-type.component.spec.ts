import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddMissionTypeComponent } from './dialog-add-mission-type.component';

describe('DialogAddMissionTypeComponent', () => {
  let component: DialogAddMissionTypeComponent;
  let fixture: ComponentFixture<DialogAddMissionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddMissionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddMissionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
