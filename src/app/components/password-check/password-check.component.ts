import { Component, Inject, input, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { PasswordCheckPointComponent } from "./password-check-point/password-check-point.component";
import { PasswordValidatorService } from '../../services/security/password-validator.service';
import { PasswordErrorFilterPipe } from '../../util/password-error-filter.pipe';

@Component({
  selector: 'fm-password-check',
  imports: [MatIconModule, PasswordCheckPointComponent, PasswordErrorFilterPipe],
  templateUrl: './password-check.component.html',
  styleUrl: './password-check.component.scss'
})
export class PasswordCheckComponent {
  @Input({required: true}) errors!: Error[];
}
