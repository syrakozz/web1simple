import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../header/header.component";
import {BodyComponent} from "../body/body.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BodyComponent],
  template: `
    <p>
      <app-header/>
      <app-body/>
    </p>
  `,
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

}
