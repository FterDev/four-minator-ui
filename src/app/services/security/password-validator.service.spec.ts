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

  it('should set options', () => {
    service.setOptions(8, 20, true, true, true);
    expect(service).toBeTruthy();
  });

  it('should validate password with and return all errors', () => {
    expect(service.validatePassword('password')).toBeInstanceOf(Array)
  });

  it('should validate password with and return null', () => {
    expect(service.validatePassword('Password1!')).toBeNull();
  });

  it('should validate password and return minLength error', () => {
    service.setOptions(8, 20, true, true, true);
    expect(service.validatePassword('Pas!4')).toContain({name: 'minLength', message: 'Password must be at least 8 characters long.'});
  });

  it('should validate password and return maxLength error', () => {
    service.setOptions(8, 20, true, true, true);
    expect(service.validatePassword('Password12345678901234567890!')).toContain({name: 'maxLength', message: 'Password must be at most 20 characters long.'});
  });

  it('should validate password and return lowerUpper error', () => {
    service.setOptions(8, 20, true, true, true);
    expect(service.validatePassword('password1!')).toContain({name: 'lowerUpper', message: 'Password must contain at least one lowercase and one uppercase letter.'});
  });

  it('should validate password and return number error', () => {
    service.setOptions(8, 20, true, true, true);
    expect(service.validatePassword('Password!')).toContain({name: 'number', message: 'Password must contain at least one number.'});
  });

  it('should validate password and return special error', () => {
    service.setOptions(8, 20, true, true, true);
    expect(service.validatePassword('Password1')).toContain({name: 'special', message: 'Password must contain at least one special character.'});
  });



});
