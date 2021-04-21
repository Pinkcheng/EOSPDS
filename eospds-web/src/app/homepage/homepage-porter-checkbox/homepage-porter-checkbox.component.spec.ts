import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagePorterCheckboxComponent } from './homepage-porter-checkbox.component';

describe('HomepagePorterCheckboxComponent', () => {
  let component: HomepagePorterCheckboxComponent;
  let fixture: ComponentFixture<HomepagePorterCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagePorterCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagePorterCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
