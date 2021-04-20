import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMissionDataComponent } from './homepage-mission-data.component';

describe('HomepageMissionDataComponent', () => {
  let component: HomepageMissionDataComponent;
  let fixture: ComponentFixture<HomepageMissionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageMissionDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageMissionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
