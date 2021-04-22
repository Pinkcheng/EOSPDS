import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMissionDataComponent } from './dialog-mission-data.component';

describe('DialogMissionDataComponent', () => {
  let component: DialogMissionDataComponent;
  let fixture: ComponentFixture<DialogMissionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMissionDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMissionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
