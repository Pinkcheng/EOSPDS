import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMissionLabelComponent } from './select-mission-label.component';

describe('SelectMissionLabelComponent', () => {
  let component: SelectMissionLabelComponent;
  let fixture: ComponentFixture<SelectMissionLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMissionLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMissionLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
