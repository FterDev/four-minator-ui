import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidatorService {

  private minLength: number = 8;
  private maxLength: number = 20;
  private lowerUpper: boolean = true;
  private number: boolean = true;
  private special: boolean = true;

  private readonly errors: Error[] = [
    {name: 'minLength', message: 'Password must be at least 8 characters long.'},
    {name: 'maxLength', message: 'Password must be at most 20 characters long.'},
    {name: 'lowerUpper', message: 'Password must contain at least one lowercase and one uppercase letter.'},
    {name: 'number', message: 'Password must contain at least one number.'},
    {name: 'special', message: 'Password must contain at least one special character.'},
    {name: 'mismatch', message: 'Passwords do not match.'}
  ];



  public setOptions(minLength: number, maxLength: number, lowerUpper: boolean, number: boolean, special: boolean): void {
    this.minLength = minLength;
    this.maxLength = maxLength;
    this.lowerUpper = lowerUpper;
    this.number = number;
    this.special = special;
  }

  public validateMatch(password: string, confirmPassword: string): Error[] | null {
    const errors: Error[] = [];
    if (password !== confirmPassword) {
      errors.push(this.errors[5]);
    }
    return errors.length > 0 ? errors : null;
  }

  public validatePassword(password: string): Error[] | null {
    const errors: Error[] = [];

    if (password.length < this.minLength) {
      errors.push(this.errors[0]);
    }

    if (password.length > this.maxLength) {
      errors.push(this.errors[1]);
    }

    if (this.lowerUpper && !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      errors.push(this.errors[2]);
    }

    if (this.number && !/\d/.test(password)) {
      errors.push(this.errors[3]);
    }

    if (this.special && !/[!@#$%^&*äöüÄÖÜßéèêàç]/.test(password)) {
      errors.push(this.errors[4]);
    }

    return errors.length > 0 ? errors : null;
  }

}
