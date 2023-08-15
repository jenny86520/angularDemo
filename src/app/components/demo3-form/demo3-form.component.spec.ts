import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo3FormComponent } from './demo3-form.component';

describe('Demo3FormComponent', () => {
  let component: Demo3FormComponent;
  let fixture: ComponentFixture<Demo3FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo3FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo3FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
