import { Component } from '@angular/core';
import { UserRegister } from '../../../interfaces/user-register';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fm-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  appearance = 'outline';

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
