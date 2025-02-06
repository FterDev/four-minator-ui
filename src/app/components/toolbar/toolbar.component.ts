import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'fm-toolbar',
  imports: [MatButton, MatToolbarModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
