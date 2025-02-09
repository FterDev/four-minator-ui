import { Routes } from '@angular/router';
import { LandingComponent } from './pages/public/landing/landing.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'auth', component: AuthComponent, children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent, title: 'Create Account' },
      ]
    }
];
