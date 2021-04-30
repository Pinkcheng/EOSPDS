import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateMissionComponent } from './dialog-update-mission.component';

describe('DialogUpdateMissionComponent', () => {
  let component: DialogUpdateMissionComponent;
  let fixture: ComponentFixture<DialogUpdateMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
