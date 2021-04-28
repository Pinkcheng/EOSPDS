import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMissionTypeComponent } from './select-mission-type.component';

describe('SelectMissionTypeComponent', () => {
  let component: SelectMissionTypeComponent;
  let fixture: ComponentFixture<SelectMissionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMissionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMissionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
