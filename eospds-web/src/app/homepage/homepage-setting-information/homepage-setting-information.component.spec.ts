import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSettingInformationComponent } from './homepage-setting-information.component';

describe('HomepageSettingInformationComponent', () => {
  let component: HomepageSettingInformationComponent;
  let fixture: ComponentFixture<HomepageSettingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageSettingInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageSettingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
