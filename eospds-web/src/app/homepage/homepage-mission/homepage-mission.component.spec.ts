import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMissionComponent } from './homepage-mission.component';

describe('HomepageMissionComponent', () => {
  let component: HomepageMissionComponent;
  let fixture: ComponentFixture<HomepageMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
