import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogManualDispatchComponent } from './dialog-manual-dispatch.component';

describe('DialogManualDispatchComponent', () => {
  let component: DialogManualDispatchComponent;
  let fixture: ComponentFixture<DialogManualDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogManualDispatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogManualDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
