import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSettingMissionTypeComponent } from './homepage-setting-mission-type.component';

describe('HomepageSettingMissionTypeComponent', () => {
  let component: HomepageSettingMissionTypeComponent;
  let fixture: ComponentFixture<HomepageSettingMissionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageSettingMissionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageSettingMissionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
