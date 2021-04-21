import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddPorterComponent } from './modal-add-porter.component';

describe('ModalAddPorterComponent', () => {
  let component: ModalAddPorterComponent;
  let fixture: ComponentFixture<ModalAddPorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddPorterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddPorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
