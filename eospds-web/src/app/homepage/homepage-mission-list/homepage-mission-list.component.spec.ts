import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMissionListComponent } from './homepage-mission-list.component';

describe('HomepageMissionListComponent', () => {
  let component: HomepageMissionListComponent;
  let fixture: ComponentFixture<HomepageMissionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageMissionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageMissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
