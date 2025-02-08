import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ToolbarComponent } from "../../../components/toolbar/toolbar.component";
import { HeaderComponent } from "../../../components/header/header.component";


@Component({
  selector: 'fm-landing',
  imports: [MatCardModule, ToolbarComponent, ToolbarComponent, HeaderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  year = new Date().getFullYear();

}
