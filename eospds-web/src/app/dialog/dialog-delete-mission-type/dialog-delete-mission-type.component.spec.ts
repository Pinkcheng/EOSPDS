import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteMissionTypeComponent } from './dialog-delete-mission-type.component';

describe('DialogDeleteMissionTypeComponent', () => {
  let component: DialogDeleteMissionTypeComponent;
  let fixture: ComponentFixture<DialogDeleteMissionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteMissionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteMissionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
