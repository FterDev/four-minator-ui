import { Component } from '@angular/core';
import { UserRegister } from '../../../interfaces/user-register';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'fm-register',
  imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule, MatCheckboxModule, RouterLink],
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

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      nickname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      terms: new FormControl('', [Validators.required]),
    });
  }

}
