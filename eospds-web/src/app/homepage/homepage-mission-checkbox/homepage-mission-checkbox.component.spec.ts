import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMissionCheckboxComponent } from './homepage-mission-checkbox.component';

describe('HomepageMissionCheckboxComponent', () => {
  let component: HomepageMissionCheckboxComponent;
  let fixture: ComponentFixture<HomepageMissionCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageMissionCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageMissionCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
