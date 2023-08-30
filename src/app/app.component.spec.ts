import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

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
      imports: [RouterTestingModule],
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
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'angularDemo app is running!'
    );
  });
});
