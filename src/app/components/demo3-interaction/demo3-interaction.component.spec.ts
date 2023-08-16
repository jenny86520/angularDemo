import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo3InteractionComponent } from './demo3-interaction.component';

describe('Demo3InteractionComponent', () => {
  let component: Demo3InteractionComponent;
  let fixture: ComponentFixture<Demo3InteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo3InteractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo3InteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
