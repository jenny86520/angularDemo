import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Demo1Component } from './demo1.component';
import { FormsModule } from '@angular/forms';

// for jasmine.clock() if it not working
// (window as any)['__zone_symbol__fakeAsyncPatchLock'] = true;
// import 'zone.js/testing';

describe('Demo1Component', () => {
  let component: Demo1Component;
  let fixture: ComponentFixture<Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Demo1Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Change Text', () => {
  let component: Demo1Component;
  let fixture: ComponentFixture<Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Demo1Component);
    component = fixture.componentInstance;
    jasmine.clock().install();
    fixture.detectChanges();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('text be changed', () => {
    jasmine.clock().tick(1000);
    expect(component.name).toBe('Test Success!');
  });
});
