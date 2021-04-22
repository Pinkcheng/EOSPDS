import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeletePorterComponent } from './dialog-delete-porter.component';

describe('DialogDeletePorterComponent', () => {
  let component: DialogDeletePorterComponent;
  let fixture: ComponentFixture<DialogDeletePorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeletePorterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeletePorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
