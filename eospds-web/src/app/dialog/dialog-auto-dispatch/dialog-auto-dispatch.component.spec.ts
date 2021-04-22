import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAutoDispatchComponent } from './dialog-auto-dispatch.component';

describe('DialogAutoDispatchComponent', () => {
  let component: DialogAutoDispatchComponent;
  let fixture: ComponentFixture<DialogAutoDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAutoDispatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAutoDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
