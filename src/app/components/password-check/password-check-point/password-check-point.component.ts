import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'fm-password-check-point',
  imports: [MatIconModule],
  templateUrl: './password-check-point.component.html',
  styleUrl: './password-check-point.component.scss'
})
export class PasswordCheckPointComponent {
  @Input() error!: boolean;
  @Input() message!: string;
}
