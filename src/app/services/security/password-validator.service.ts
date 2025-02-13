import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidatorService {

  private readonly minLength: number;
  private readonly maxLength: number;
  private readonly lowerUpper: boolean;
  private readonly number: boolean;
  private readonly special: boolean;

  private readonly errors: Error[] = [
    {name: 'minLength', message: 'Password must be at least 8 characters long.'},
    {name: 'maxLength', message: 'Password must be at most 20 characters long.'},
    {name: 'lowerUpper', message: 'Password must contain at least one lowercase and one uppercase letter.'},
    {name: 'number', message: 'Password must contain at least one number.'},
    {name: 'special', message: 'Password must contain at least one special character.'},
    {name: 'mismatch', message: 'Passwords do not match.'}
  ];

  constructor(@Inject('MIN_LENGTH') minLength: number = 8,
              @Inject('MAX_LENGTH') maxLength: number = 30,
              @Inject('LOWER_UPPER') lowerUpper: boolean = true,
              @Inject('NUMBER') number: boolean = true,
              @Inject('SPECIAL') special: boolean = true) {
    this.minLength = minLength;
    this.maxLength = maxLength;
    this.lowerUpper = lowerUpper;
    this.number = number;
    this.special = special;
  }

  public validateMatch(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  }

}
