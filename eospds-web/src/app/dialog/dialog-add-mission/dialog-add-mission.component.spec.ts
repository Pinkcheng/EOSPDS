import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddMissionComponent } from './dialog-add-mission.component';

describe('DialogAddMissionComponent', () => {
  let component: DialogAddMissionComponent;
  let fixture: ComponentFixture<DialogAddMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
