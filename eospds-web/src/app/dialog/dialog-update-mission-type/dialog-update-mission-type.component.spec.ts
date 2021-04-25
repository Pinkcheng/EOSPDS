import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateMissionTypeComponent } from './dialog-update-mission-type.component';

describe('DialogUpdateMissionTypeComponent', () => {
  let component: DialogUpdateMissionTypeComponent;
  let fixture: ComponentFixture<DialogUpdateMissionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateMissionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateMissionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
