import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPorterComponent } from './dialog-add-porter.component';

describe('DialogAddPorterComponent', () => {
  let component: DialogAddPorterComponent;
  let fixture: ComponentFixture<DialogAddPorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddPorterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddPorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
