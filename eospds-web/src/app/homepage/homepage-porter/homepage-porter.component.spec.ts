import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagePorterComponent } from './homepage-porter.component';

describe('HomepagePorterComponent', () => {
  let component: HomepagePorterComponent;
  let fixture: ComponentFixture<HomepagePorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagePorterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagePorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
