import { Component, inject } from '@angular/core';
import { UserRegister } from '../../../interfaces/user-register';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { PasswordCheckComponent } from "../../../components/password-check/password-check.component";
import { PasswordValidatorService } from '../../../services/security/password-validator.service';

@Component({
  selector: 'fm-register',
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    RouterLink,
    ReactiveFormsModule,
    PasswordCheckComponent],
  templateUrl: './register.component.html',
  styleUrl: '../auth.scss'
})
export class RegisterComponent {

  appearance: MatFormFieldAppearance = 'outline';

  user: UserRegister = {
    email: '',
    nickname: '',
    password: '',
    confirmPassword: '',
    terms: false
  }

  registerForm: FormGroup;

  errors : Error[] = [];
  private passwordValidatorService = inject(PasswordValidatorService);

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      nickname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      terms: new FormControl('', [Validators.required]),
    });
  }

  onPasswordChange() {
    this.validatePassword(this.registerForm.get('password')?.getRawValue());
  }


  private validatePassword(password: string) {
    this.errors = [];

    let res = this.passwordValidatorService.validatePassword(password);
    if(res)
    {
      this.errors = res;
      return;
    }
    res = this.passwordValidatorService.validateMatch(password, this.registerForm.get('confirmPassword')?.getRawValue());
    if(res)
    {
      this.errors = res;
      return;
    }
  }


}
