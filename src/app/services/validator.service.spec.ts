import { TestBed } from '@angular/core/testing';

import { PasswordValidator } from './validator.service';

describe('PasswordValidator', () => {
  let service: PasswordValidator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordValidator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
