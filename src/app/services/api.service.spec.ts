import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

describe('ApiService', () => {
  let service: ApiService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // 僅注入此 case
  it('#getPeople should return people data', inject(
    [ApiService],
    (service: ApiService) => {
      expect(service.getPeople()).toEqual([
        { account: 'User1', password: '1111' },
        { account: 'User2', password: '2222' },
        { account: 'User3', password: '3333' },
      ]);
    }
  ));

  // 因是以靜態檔案模擬後端回傳，故會進入 error，僅演示打 API 的測試作法
  it('#getApiPeople should return people data from observable', (done: DoneFn) => {
    service.getApiPeople().subscribe(({ data }) => {
      expect(data).toEqual([
        { account: 'User4', password: '4444' },
        { account: 'User5', password: '5555' },
        { account: 'User6', password: '6666' },
      ]);
      done();
    }, done.fail);
  });

  it('#getValidationResult should return false from observable', (done: DoneFn) => {
    service.getValidationResult('1111').subscribe((result) => {
      expect(result).toBeFalse();
      done();
    }, done.fail);

    service.getValidationResult('2222').subscribe((result) => {
      expect(result).toBeFalse();
      done();
    }, done.fail);
  });

  it('#getValidationResult should return true from observable', (done: DoneFn) => {
    service.getValidationResult('1234').subscribe((result) => {
      expect(result).toBeTrue();
      done();
    }, done.fail);
  });
});
