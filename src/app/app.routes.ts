import { Routes } from '@angular/router';
import { LandingComponent } from './pages/public/landing/landing.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'auth', children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
      ]
    }
];
