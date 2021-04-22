import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteMissionComponent } from './dialog-delete-mission.component';

describe('DialogDeleteMissionComponent', () => {
  let component: DialogDeleteMissionComponent;
  let fixture: ComponentFixture<DialogDeleteMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
