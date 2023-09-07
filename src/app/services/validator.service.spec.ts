import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PasswordValidator } from './validator.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ApiService } from './api.service';
import { cold, getTestScheduler } from 'jasmine-marbles';

describe('PasswordValidator', () => {
  let service: PasswordValidator;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule],
    });
    service = TestBed.inject(PasswordValidator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // 練習 SPY DI
  it('#validate should return stubbed value from a spy', (done: DoneFn) => {
    // 產生一個 ApiService.getValidationResult 實作一個回傳值供注入測試
    const apiServiceSpy = jasmine.createSpyObj('ApiService', [
      'getValidationResult',
    ]);
    apiServiceSpy.getValidationResult.and.returnValue(of(true));
    // DI 假 ApiService
    service = new PasswordValidator(apiServiceSpy);

    service.validate(new FormControl('1111')).subscribe((result) => {
      expect(result).withContext('return value').toBeNull();
      done();
    });

    apiServiceSpy.getValidationResult.calls
      .mostRecent()
      .returnValue.subscribe((result: boolean) => {
        expect(result)
          .withContext('spy method latest called return value')
          .toBeTrue();
        done();
      });

    expect(apiServiceSpy.getValidationResult.calls.count())
      .withContext('spy method was called once')
      .toBe(1);
  });
});

// 練習 SPY DI - use TestBed
describe('PasswordValidator SPY DI Test Use TestBed', () => {
  let service: PasswordValidator;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiService', ['getValidationResult']);
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [PasswordValidator, { provide: ApiService, useValue: spy }],
    });
    service = TestBed.inject(PasswordValidator);
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('#validate should return stubbed value from a spy', (done: DoneFn) => {
    apiServiceSpy.getValidationResult.and.returnValue(of(true));

    service.validate(new FormControl('1111')).subscribe((result) => {
      expect(result).withContext('return value').toBeNull();
      done();
    });

    apiServiceSpy.getValidationResult.calls
      .mostRecent()
      .returnValue.subscribe((result: boolean) => {
        expect(result)
          .withContext('spy method latest called return value')
          .toBeTrue();
        done();
      });

    expect(apiServiceSpy.getValidationResult.calls.count())
      .withContext('spy method was called once')
      .toBe(1);
  });
});

// 練習 SPY DI - use jasmine-marbles pakage
describe('PasswordValidator SPY DI Test Use jasmine-marbles pakage', () => {
  let service: PasswordValidator;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let MSG: string = 'call success!';

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiService', ['getAsyncData']);
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [PasswordValidator, { provide: ApiService, useValue: spy }],
    });
    service = TestBed.inject(PasswordValidator);
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should show data after get (marbles)', () => {
    // observable test value and complete(), after delay
    const m$ = cold('---x|', { x: MSG }, new Error('ApiService test failure'));
    apiServiceSpy.getAsyncData.and.returnValue(m$);

    service.ngOnInit();
    expect(service.log).withContext('should show empty').toBe('');

    getTestScheduler().flush(); // flush the observables

    expect(service.log).withContext(`should show '${MSG}'`).toBe(MSG);
  });
});
