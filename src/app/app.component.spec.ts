import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('Test Lifecycle', () => {
  beforeAll(() => {
    console.log('Run beforeAll');
  });

  beforeEach(() => {
    console.log('Run beforeEach');
  });

  it('Test case 1', () => {
    expect('Run it 1').toBeDefined();
  });
  it('Test case 2', () => {
    expect('Run it 2').toBeDefined();
  });

  afterEach(() => {
    console.log('Run afterEach');
  });

  afterAll(() => {
    console.log('Run afterAll');
  });
});

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [AppComponent],
      providers: [],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularDemo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angularDemo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('angularDemo');
  });
});

describe('Select Template', () => {
  let INIT_TEMPLATE: string;
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let select: HTMLSelectElement;
  let buttons: HTMLAllCollection;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [AppComponent],
      providers: [],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    select = fixture.nativeElement.querySelector('select');
    buttons = fixture.nativeElement.getElementsByTagName('button');
    INIT_TEMPLATE = app.templates[0];
  });

  it('should have eight select items', () => {
    fixture.detectChanges();
    expect(select.options.length).toEqual(8);
  });

  it('should have eight buttons', () => {
    fixture.detectChanges();
    expect(buttons.length).toEqual(8);
  });

  it(`should have as selectTemplate initial value`, () => {
    expect(app.selectTemplate).toEqual(INIT_TEMPLATE);
  });

  it('should selected selectTemplate', () => {
    fixture.detectChanges();
    expect(select.getAttribute('ng-reflect-model')).toEqual(INIT_TEMPLATE);
  });

  it(`can select to change template`, () => {
    fixture.detectChanges();
    for (let i = 1; i < 8; i++) {
      select.value = select.options[i].value;
      select.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      expect(app.selectTemplate).toBe(app.templates[i]);
      expect(
        fixture.nativeElement.getElementsByTagName('h1')[1].textContent
      ).toContain(app.templates[i]);
    }
  });

  it(`can click to change template`, fakeAsync(() => {
    fixture.detectChanges();
    for (let i = 1; i < 8; i++) {
      buttons[i].dispatchEvent(new Event('click'));
      fixture.detectChanges();
      tick(); // wait for mini second (default is 0)
      expect(select.options[select.selectedIndex].label).toBe(app.templates[i]);
      expect(
        fixture.nativeElement.getElementsByTagName('h1')[1].textContent
      ).toContain(app.templates[i]);
    }
  }));
});
