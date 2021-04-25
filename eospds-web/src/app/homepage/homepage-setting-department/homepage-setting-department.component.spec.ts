import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSettingDepartmentComponent } from './homepage-setting-department.component';

describe('HomepageSettingDepartmentComponent', () => {
  let component: HomepageSettingDepartmentComponent;
  let fixture: ComponentFixture<HomepageSettingDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageSettingDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageSettingDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
