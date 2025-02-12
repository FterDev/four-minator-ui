import { TestBed } from '@angular/core/testing';

import { PasswordValidatorService } from './password-validator.service';

describe('PasswordValidatorService', () => {
  let service: PasswordValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate passwords match', () => {
    expect(service.validateMatch('password', 'password')).toBeTrue();
  });

  it('should validate passwords do not match', () => {
    expect(service.validateMatch('password', 'password1')).toBeFalse();
  });
});
