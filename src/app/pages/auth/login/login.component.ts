import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';


type LoginForm = {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'fm-login',
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: '../auth.scss'
})
export class LoginComponent {


  loginForm: FormGroup;
  appearance: MatFormFieldAppearance = 'outline';

  constructor() {

    this.loginForm = new FormGroup({
      email: new FormControl('', []),
      password: new FormControl('', [])
    });

    console.log(this.loginForm);

  }
}
