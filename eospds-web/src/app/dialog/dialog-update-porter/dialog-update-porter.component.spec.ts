import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdatePorterComponent } from './dialog-update-porter.component';

describe('DialogUpdatePorterComponent', () => {
  let component: DialogUpdatePorterComponent;
  let fixture: ComponentFixture<DialogUpdatePorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdatePorterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdatePorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
